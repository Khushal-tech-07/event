import React, { useState, useRef, useEffect } from "react";
import { BACKGROUND_VIDEO_URL } from "../../config/appConfig";
import { ThreeBlackHole } from "./ThreeBlackHole";
import { Play, Pause, Box, Video, Moon } from "lucide-react";

export const GlobalBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [use3DMode, setUse3DMode] = useState(false);
  const [dimLevel, setDimLevel] = useState<"standard" | "darker">("standard");

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsPlaying(false);
        videoRef.current?.pause();
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setVideoError(true);
      });
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
      {/* Background Layer: Either HTML5 Video or Three.js 3D Canvas Fallback */}
      {!use3DMode && !videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        >
          <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
        </video>
      ) : (
        /* Three.js Procedural Canvas Fallback / 3D Mode */
        <div className="absolute inset-0 w-full h-full">
          <ThreeBlackHole
            interactive={false}
            showControls={false}
            spinSpeedMultiplier={isPlaying ? 0.7 : 0}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Dark Multi-Stop Gradient Overlay (Ensures WCAG AAA legibility for all text) */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          dimLevel === "darker"
            ? "bg-gradient-to-b from-[#030308]/90 via-[#030308]/85 to-[#030308]/95"
            : "bg-gradient-to-b from-[#030308]/75 via-[#030308]/65 to-[#030308]/85"
        }`}
      />

      {/* Subtle Vignette & Ambient Accretion Disk Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,8,0.7)_100%)]" />

      {/* Floating Accessibility Control Pill (Bottom-Right, Pointer-Events Active) */}
      <div className="absolute bottom-4 right-4 pointer-events-auto z-40 flex items-center gap-1.5 bg-[#0b0e1b]/90 border border-slate-700/70 backdrop-blur-md rounded-full px-2.5 py-1.5 shadow-xl text-xs text-slate-300">
        {/* Play/Pause Toggle */}
        <button
          onClick={togglePlayPause}
          className="p-1.5 hover:text-[#ff8a3d] transition-colors rounded-full hover:bg-white/5"
          title={isPlaying ? "Pause background animation" : "Play background animation"}
          aria-label={isPlaying ? "Pause background motion" : "Play background motion"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#ff8a3d]" />}
        </button>

        <span className="w-px h-3.5 bg-slate-700/80" />

        {/* Video vs 3D Mode Switch */}
        <button
          onClick={() => setUse3DMode(!use3DMode)}
          className={`flex items-center gap-1 px-2 py-0.5 rounded-full transition-all text-[11px] font-mono ${
            use3DMode
              ? "bg-[#ff8a3d]/20 text-[#ff8a3d] border border-[#ff8a3d]/40"
              : "hover:text-white"
          }`}
          title="Switch between MP4 video and Three.js 3D background"
          aria-label="Toggle 3D canvas or video background"
        >
          {use3DMode ? <Box className="w-3 h-3 text-[#ff8a3d]" /> : <Video className="w-3 h-3" />}
          <span>{use3DMode ? "3D GL" : "Video"}</span>
        </button>

        <span className="w-px h-3.5 bg-slate-700/80" />

        {/* Contrast / Dim level toggle */}
        <button
          onClick={() => setDimLevel(dimLevel === "standard" ? "darker" : "standard")}
          className={`p-1.5 rounded-full transition-colors ${
            dimLevel === "darker" ? "text-cyan-400 bg-cyan-950/40" : "hover:text-white"
          }`}
          title="Adjust overlay contrast"
          aria-label="Toggle overlay contrast"
        >
          <Moon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
