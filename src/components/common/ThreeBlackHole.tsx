import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { Eye, EyeOff, RotateCcw, Zap, Sparkles } from "lucide-react";

interface ThreeBlackHoleProps {
  interactive?: boolean;
  className?: string;
  showControls?: boolean;
  spinSpeedMultiplier?: number;
}

export const ThreeBlackHole: React.FC<ThreeBlackHoleProps> = ({
  interactive = false,
  className = "w-full h-full",
  showControls = false,
  spinSpeedMultiplier = 1.0,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [controlsCollapsed, setControlsCollapsed] = useState(false);
  const [showJets, setShowJets] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1.0);
  const [diskGlowColor, setDiskGlowColor] = useState<"orange" | "violet" | "cyan">("orange");

  // Refs for animation loop & interactive state
  const stateRef = useRef({
    showJets: true,
    rotationSpeed: 1.0,
    diskGlowColor: "orange",
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0,
    targetRotationX: 0.25,
    targetRotationY: 0,
    currentRotationX: 0.25,
    currentRotationY: 0,
  });

  // Keep stateRef in sync with React state
  useEffect(() => {
    stateRef.current.showJets = showJets;
    stateRef.current.rotationSpeed = rotationSpeed * spinSpeedMultiplier;
    stateRef.current.diskGlowColor = diskGlowColor;
  }, [showJets, rotationSpeed, diskGlowColor, spinSpeedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Software WebGL Guard (r160+ standard)
    const isSoftwareGl = (() => {
      const gl = document.createElement("canvas").getContext("webgl2");
      if (!gl) return true;
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030308, 0.015);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 12);
    camera.lookAt(0, 0, 0);

    // 3. Renderer with ACESFilmicToneMapping & Color Pipeline
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: "high-performance",
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Studio Environment via PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Studio Lighting Rig
    const warmKeyLight = new THREE.DirectionalLight(0xffa250, 3.0);
    warmKeyLight.position.set(6, 8, 5);
    scene.add(warmKeyLight);

    const coolFillLight = new THREE.HemisphereLight(0x7c5cff, 0x050510, 1.2);
    scene.add(coolFillLight);

    const rimLight = new THREE.DirectionalLight(0x4fd1ff, 2.0);
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    // Helper: Procedural Noise & Ring Canvas Textures (Zero external 404s)
    const createDiskTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d")!;
      const centerX = 512;
      const centerY = 512;

      // Radial base gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 120, centerX, centerY, 510);
      gradient.addColorStop(0.0, "rgba(255, 255, 255, 0.95)");
      gradient.addColorStop(0.12, "rgba(255, 200, 100, 0.9)");
      gradient.addColorStop(0.35, "rgba(255, 120, 30, 0.8)");
      gradient.addColorStop(0.65, "rgba(180, 50, 20, 0.4)");
      gradient.addColorStop(0.85, "rgba(100, 30, 80, 0.2)");
      gradient.addColorStop(1.0, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 512, 0, Math.PI * 2);
      ctx.fill();

      // Procedural accretion ring streaks
      for (let i = 0; i < 400; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 130 + Math.random() * 370;
        const length = 0.2 + Math.random() * 0.8;
        const alpha = 0.05 + Math.random() * 0.2;
        ctx.strokeStyle = `rgba(255, 240, 200, ${alpha})`;
        ctx.lineWidth = 1 + Math.random() * 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, angle, angle + length);
        ctx.stroke();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    // 6. Assemble Multi-Part Procedural Black Hole Group (Composite 3–12 parts)
    const blackHoleGroup = new THREE.Group();
    scene.add(blackHoleGroup);

    // Part 1: Central Event Horizon Sphere (Pure absorbing black)
    const horizonGeo = new THREE.SphereGeometry(1.8, 64, 64);
    const horizonMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const horizonMesh = new THREE.Mesh(horizonGeo, horizonMat);
    blackHoleGroup.add(horizonMesh);

    // Part 2: Photon Sphere Lensing Glow Halo
    const photonSphereGeo = new THREE.SphereGeometry(2.15, 48, 48);
    const photonSphereMat = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const photonSphereMesh = new THREE.Mesh(photonSphereGeo, photonSphereMat);
    blackHoleGroup.add(photonSphereMesh);

    // Part 3: Primary Accretion Disk (Horizontal Plane)
    const diskTexture = createDiskTexture();
    const diskGeo = new THREE.RingGeometry(2.2, 7.2, 80, 8);
    // Align texture coordinates radially
    const diskMat = new THREE.MeshBasicMaterial({
      map: diskTexture,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mainDiskMesh = new THREE.Mesh(diskGeo, diskMat);
    mainDiskMesh.rotation.x = Math.PI / 2;
    blackHoleGroup.add(mainDiskMesh);

    // Part 4: Gravitational Lensing Halo (Secondary Arch - Interstellar Einstein Cross Effect)
    const lensingArchGeo = new THREE.RingGeometry(2.0, 5.5, 64, 4);
    const lensingArchMat = new THREE.MeshBasicMaterial({
      map: diskTexture,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lensingArchMesh = new THREE.Mesh(lensingArchGeo, lensingArchMat);
    // Tilted to mimic light bent upward over the poles
    lensingArchMesh.rotation.y = Math.PI / 2;
    blackHoleGroup.add(lensingArchMesh);

    // Part 5 & 6: Relativistic Particle Jets (North & South Poles)
    const jetGeo = new THREE.CylinderGeometry(0.08, 0.9, 14, 32, 1, true);
    const jetMat = new THREE.MeshBasicMaterial({
      color: 0x4fd1ff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const northJet = new THREE.Mesh(jetGeo, jetMat);
    northJet.position.y = 8;
    blackHoleGroup.add(northJet);

    const southJet = new THREE.Mesh(jetGeo, jetMat);
    southJet.position.y = -8;
    southJet.rotation.z = Math.PI;
    blackHoleGroup.add(southJet);

    // Part 7: Accretion Plasma Spark Particles (InstancedMesh)
    const sparkCount = 350;
    const sparkGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const sparkMesh = new THREE.InstancedMesh(sparkGeo, sparkMat, sparkCount);
    const dummy = new THREE.Object3D();
    const sparkRadii = new Float32Array(sparkCount);
    const sparkAngles = new Float32Array(sparkCount);
    const sparkSpeeds = new Float32Array(sparkCount);
    const sparkHeights = new Float32Array(sparkCount);

    for (let i = 0; i < sparkCount; i++) {
      const radius = 2.4 + Math.random() * 5.0;
      sparkRadii[i] = radius;
      sparkAngles[i] = Math.random() * Math.PI * 2;
      // Keplerian speed: faster near center
      sparkSpeeds[i] = (1.5 / Math.sqrt(radius)) * (0.8 + Math.random() * 0.4);
      sparkHeights[i] = (Math.random() - 0.5) * 0.25;

      dummy.position.set(
        Math.cos(sparkAngles[i]) * radius,
        sparkHeights[i],
        Math.sin(sparkAngles[i]) * radius
      );
      dummy.updateMatrix();
      sparkMesh.setMatrixAt(i, dummy.matrix);
    }
    sparkMesh.instanceMatrix.needsUpdate = true;
    sparkMesh.computeBoundingSphere();
    blackHoleGroup.add(sparkMesh);

    // Part 8: Deep Celestial Starfield Sphere
    const starCount = isSoftwareGl ? 800 : 2500;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const dist = 60 + Math.random() * 180;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = dist * Math.cos(phi);

      // Star color temperatures: cyan-blue, pure white, warm amber
      const type = Math.random();
      if (type > 0.8) {
        starColors[i * 3] = 0.6;
        starColors[i * 3 + 1] = 0.8;
        starColors[i * 3 + 2] = 1.0;
      } else if (type > 0.5) {
        starColors[i * 3] = 1.0;
        starColors[i * 3 + 1] = 0.85;
        starColors[i * 3 + 2] = 0.6;
      } else {
        starColors[i * 3] = 0.95;
        starColors[i * 3 + 1] = 0.95;
        starColors[i * 3 + 2] = 0.95;
      }
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // 7. Interactive Mouse / Touch Dragging & Tilt
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      stateRef.current.isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      stateRef.current.prevMouseX = clientX;
      stateRef.current.prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive || !stateRef.current.isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - stateRef.current.prevMouseX;
      const deltaY = clientY - stateRef.current.prevMouseY;

      stateRef.current.targetRotationY += deltaX * 0.005;
      stateRef.current.targetRotationX = Math.max(
        -Math.PI / 3,
        Math.min(Math.PI / 3, stateRef.current.targetRotationX + deltaY * 0.005)
      );

      stateRef.current.prevMouseX = clientX;
      stateRef.current.prevMouseY = clientY;
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    if (interactive) {
      container.addEventListener("mousedown", handlePointerDown);
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("mouseup", handlePointerUp);
      container.addEventListener("touchstart", handlePointerDown, { passive: true });
      window.addEventListener("touchmove", handlePointerMove, { passive: true });
      window.addEventListener("touchend", handlePointerUp);
    }

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 9. Damped 60fps Loop with Software GL Guard (afterDraw pattern)
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          animationFrameId = window.setTimeout(poll, 5);
        } else {
          gl.deleteSync(sync);
          animationFrameId = window.setTimeout(cb, 80);
        }
      };
      animationFrameId = window.setTimeout(poll, 5);
    }

    const tick = () => {
      const dt = clock.getDelta();
      const state = stateRef.current;
      const speed = state.rotationSpeed;

      // Rotate Accretion Disk
      mainDiskMesh.rotation.z += 0.45 * speed * dt;
      lensingArchMesh.rotation.z += 0.35 * speed * dt;

      // Update Relativistic Jets visibility
      northJet.visible = state.showJets;
      southJet.visible = state.showJets;
      if (state.showJets) {
        northJet.rotation.y += 0.8 * dt;
        southJet.rotation.y -= 0.8 * dt;
      }

      // Smooth exponential damping on user tilt
      state.currentRotationX = THREE.MathUtils.damp(
        state.currentRotationX,
        state.targetRotationX,
        4.0,
        dt
      );
      state.currentRotationY = THREE.MathUtils.damp(
        state.currentRotationY,
        state.targetRotationY,
        4.0,
        dt
      );

      blackHoleGroup.rotation.x = state.currentRotationX;
      blackHoleGroup.rotation.y = state.currentRotationY;

      // Update Keplerian sparks
      for (let i = 0; i < sparkCount; i++) {
        sparkAngles[i] += sparkSpeeds[i] * speed * dt;
        dummy.position.set(
          Math.cos(sparkAngles[i]) * sparkRadii[i],
          sparkHeights[i],
          Math.sin(sparkAngles[i]) * sparkRadii[i]
        );
        dummy.updateMatrix();
        sparkMesh.setMatrixAt(i, dummy.matrix);
      }
      sparkMesh.instanceMatrix.needsUpdate = true;

      // Subtle starfield slow drift
      stars.rotation.y += 0.02 * dt;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    tick();

    // 10. Clean Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        container.removeEventListener("mousedown", handlePointerDown);
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("mouseup", handlePointerUp);
        container.removeEventListener("touchstart", handlePointerDown);
        window.removeEventListener("touchmove", handlePointerMove);
        window.removeEventListener("touchend", handlePointerUp);
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      horizonGeo.dispose();
      horizonMat.dispose();
      photonSphereGeo.dispose();
      photonSphereMat.dispose();
      diskGeo.dispose();
      diskMat.dispose();
      lensingArchGeo.dispose();
      lensingArchMat.dispose();
      jetGeo.dispose();
      jetMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      diskTexture.dispose();
    };
  }, [interactive, spinSpeedMultiplier]);

  return (
    <div className={`relative ${className} select-none overflow-hidden`}>
      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Interactive Controls Overlay - Sleek Collapsible Bottom Dock (Three.js Directive 5) */}
      {interactive && showControls && (
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 z-20 max-w-[94vw] w-full sm:w-auto ${
            controlsCollapsed ? "translate-y-[calc(100%-36px)]" : "translate-y-0"
          }`}
        >
          {/* Collapse/Expand Toggle Tab */}
          <div className="flex justify-center mb-1">
            <button
              onClick={() => setControlsCollapsed(!controlsCollapsed)}
              className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-slate-900/90 text-slate-300 border border-slate-700/60 rounded-t-lg hover:text-white flex items-center gap-1.5 shadow-lg"
              title={controlsCollapsed ? "Expand Controls" : "Collapse Controls"}
            >
              {controlsCollapsed ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-cyan-400" /> Show Controls
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-400" /> Hide Controls
                </>
              )}
            </button>
          </div>

          {/* Unified Horizontal Dock (Solid/rgba surfaces over WebGL) */}
          <div className="bg-[#0b0d18]/95 border border-slate-700/80 rounded-2xl px-5 py-3 shadow-2xl flex flex-wrap items-center justify-center gap-4 text-xs">
            {/* Speed Slider */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 uppercase tracking-wider font-mono">Speed:</span>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={rotationSpeed}
                onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                className="w-24 accent-[#ff8a3d] cursor-pointer"
              />
              <span className="font-mono text-amber-400 w-8">{rotationSpeed.toFixed(1)}x</span>
            </div>

            <div className="h-4 w-px bg-slate-700 hidden sm:block" />

            {/* Relativistic Jets Toggle */}
            <button
              onClick={() => setShowJets(!showJets)}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-colors border ${
                showJets
                  ? "bg-cyan-950/70 border-cyan-500/50 text-cyan-300"
                  : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Jets: {showJets ? "Active" : "Off"}</span>
            </button>

            {/* Reset Camera View */}
            <button
              onClick={() => {
                stateRef.current.targetRotationX = 0.25;
                stateRef.current.targetRotationY = 0;
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Reset View</span>
            </button>

            {/* Instructions */}
            <div className="text-[11px] text-slate-400 font-mono hidden md:flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#ff8a3d]" /> Drag to rotate in 3D
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
