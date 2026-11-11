import React, { useState } from "react";
import { SEO } from "../components/common/SEO";
import { ThreeBlackHole } from "../components/common/ThreeBlackHole";
import { 
  JOURNEY_STAGES, BLACK_HOLE_TYPES, FAMOUS_BLACK_HOLES, BLACK_HOLE_FAQS, JourneyStage 
} from "../data/blackHoles";
import { 
  Disc3, Calculator, Clock, ChevronDown, ChevronUp, Sparkles, 
  RotateCcw, ArrowRight, Layers, HelpCircle, Flame, ShieldAlert, Cpu
} from "lucide-react";

export const BlackHoles: React.FC = () => {
  // 1. Journey Stage Active Index
  const [activeStageId, setActiveStageId] = useState<string>(JOURNEY_STAGES[2].id); // default Event Horizon

  // 2. Types Tab Active
  const [activeTypeId, setActiveTypeId] = useState<string>("stellar");

  // 3. Schwarzschild Calculator State
  const [calcMass, setCalcMass] = useState<number>(10); // Solar masses
  const [presetLabel, setPresetLabel] = useState<string>("Stellar BH (10 M☉)");

  // 4. Time Dilation Slider State (distance in multiples of Schwarzschild radius R_s)
  // Formula: dt_distant / dt_proper = 1 / sqrt(1 - R_s / r)
  const [dilationDistanceR, setDilationDistanceR] = useState<number>(1.5); // 1.5 R_s = photon sphere

  // 5. FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Schwarzschild radius: R_s = 2GM/c^2 = 2.95325 km per Solar Mass
  const KM_PER_SOLAR_MASS = 2.95325;
  const AU_IN_KM = 149597870.7;
  const MILES_PER_KM = 0.621371;

  const currentRadiusKm = calcMass * KM_PER_SOLAR_MASS;
  const currentRadiusMiles = currentRadiusKm * MILES_PER_KM;
  const currentRadiusAU = currentRadiusKm / AU_IN_KM;

  // Time dilation factor: 1 / sqrt(1 - 1/r) where r is in units of R_s
  // If r <= 1.0, factor approaches infinity
  const timeDilationFactor = dilationDistanceR > 1.001 
    ? 1 / Math.sqrt(1 - 1 / dilationDistanceR) 
    : 999999;

  const activeStage = JOURNEY_STAGES.find((s) => s.id === activeStageId) || JOURNEY_STAGES[2];
  const activeType = BLACK_HOLE_TYPES.find((t) => t.id === activeTypeId) || BLACK_HOLE_TYPES[0];

  const presets = [
    { label: "Earth (0.000003 M☉)", mass: 0.000003003 },
    { label: "Our Sun (1 M☉)", mass: 1 },
    { label: "Stellar BH (10 M☉)", mass: 10 },
    { label: "Cygnus X-1 (21.2 M☉)", mass: 21.2 },
    { label: "Sagittarius A* (4.3M M☉)", mass: 4300000 },
    { label: "M87* (6.5B M☉)", mass: 6500000000 },
    { label: "TON 618 (66B M☉)", mass: 66000000000 },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Black Holes - Relativistic Physics & Simulators"
        description="Explore the anatomy of black holes, Schwarzschild radius calculator, gravitational time dilation visualizer, and 3D Kerr black hole simulation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* HERO TITLE & INTRO */}
        <section className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a3d]/15 border border-[#ff8a3d]/30 text-xs font-mono text-[#ff8a3d]">
            <Disc3 className="w-4 h-4 text-[#ff8a3d]" />
            <span>GENERAL RELATIVITY & SINGULARITIES</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            The Physics of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffaa55] to-[#ff8a3d] accretion-glow">
              Black Holes
            </span>
          </h1>

          <p className="font-subheading text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Where mass curves spacetime so completely that all future geodesics converge onto a single point of infinite density. 
            Examine the mathematics, structure, and thermodynamics of nature's ultimate abyss.
          </p>
        </section>

        {/* 1. INTERACTIVE 3D BLACK HOLE VIEWPORT (Three.js Skill Integration) */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-[#060814] shadow-2xl">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300">
              WebGL 3D Interactive Simulation
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Drag to orbit • Collapsible dock below
            </span>
          </div>

          <div className="h-[460px] sm:h-[540px] w-full">
            <ThreeBlackHole
              interactive={true}
              showControls={true}
              spinSpeedMultiplier={1.0}
              className="w-full h-full"
            />
          </div>
        </section>

        {/* 2. THE 7-STAGE JOURNEY TO THE SINGULARITY */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest">
              STEP-BY-STEP DESCENT
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Anatomy of Gravitational Collapse
            </h2>
            <p className="text-sm text-slate-400">
              Follow the journey of matter and spacetime from thermonuclear equilibrium to quantum evaporation.
            </p>
          </div>

          {/* Stage Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {JOURNEY_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#ff8a3d] text-slate-950 border-[#ff8a3d] font-bold shadow-[0_0_15px_rgba(255,138,61,0.4)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    isSelected ? "bg-slate-950 text-[#ff8a3d]" : "bg-white/10 text-slate-400"
                  }`}>
                    {stage.number}
                  </span>
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="p-6 sm:p-10 rounded-3xl glass-card-accent border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#ff8a3d]/20 text-[#ff8a3d] border border-[#ff8a3d]/30 font-semibold">
                    STAGE {activeStage.number} OF 7
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeStage.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {activeStage.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeStage.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    Astrophysical Mechanics:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {activeStage.scientificDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#ff8a3d] font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Equation Box & Next Step */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
                    Governing Physics Equation
                  </span>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-center text-sm sm:text-base text-amber-300 shadow-inner">
                    {activeStage.equation || "G_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}"}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const currentIndex = JOURNEY_STAGES.findIndex((s) => s.id === activeStageId);
                      const nextIndex = (currentIndex + 1) % JOURNEY_STAGES.length;
                      setActiveStageId(JOURNEY_STAGES[nextIndex].id);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff8a3d] to-[#e66c1f] text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Proceed to Stage {(activeStage.number % 7) + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE SCHWARZSCHILD RADIUS CALCULATOR */}
        <section className="p-6 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-[#ff8a3d]" />
                <span>RELATIVISTIC CALCULATOR</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Schwarzschild Radius Calculator (R_s)
              </h2>
              <p className="text-xs text-slate-400">
                Formula: R_s = 2GM / c² ≈ 2.95325 km per Solar Mass (M☉)
              </p>
            </div>

            {/* Presets dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Presets:</span>
              <select
                value={presetLabel}
                onChange={(e) => {
                  const match = presets.find((p) => p.label === e.target.value);
                  if (match) {
                    setPresetLabel(match.label);
                    setCalcMass(match.mass);
                  }
                }}
                className="px-3 py-1.5 rounded-xl bg-black/60 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#ff8a3d]"
              >
                {presets.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Input Slider & Manual Number */}
            <div className="lg:col-span-6 space-y-4">
              <label className="text-xs font-mono text-slate-300 block">
                Enter Black Hole Mass (in Solar Masses M☉):
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0.000001"
                  max="100000000000"
                  step="any"
                  value={calcMass}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value) || 0;
                    setCalcMass(val);
                    setPresetLabel("Custom");
                  }}
                  className="w-48 px-3.5 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-sm font-mono text-white focus:outline-none focus:border-[#ff8a3d]"
                />
                <span className="text-xs font-mono text-slate-400">M☉ (Solar Masses)</span>
              </div>

              {/* Quick slider for common stellar-to-supermassive range */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Stellar (3 M☉)</span>
                  <span>Intermediate (1,000 M☉)</span>
                  <span>Supermassive (1M M☉)</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="1000000"
                  value={Math.min(1000000, Math.max(3, calcMass))}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setCalcMass(val);
                    setPresetLabel("Custom");
                  }}
                  className="w-full accent-[#ff8a3d] cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Results Display */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Radius (Kilometers)
                </span>
                <div className="font-heading text-lg sm:text-xl font-bold text-[#ff8a3d] truncate">
                  {currentRadiusKm < 0.01 
                    ? currentRadiusKm.toExponential(4) 
                    : currentRadiusKm > 10000000
                    ? currentRadiusKm.toExponential(4)
                    : currentRadiusKm.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <span className="text-[11px] font-mono text-slate-500">km</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Radius (Miles)
                </span>
                <div className="font-heading text-lg sm:text-xl font-bold text-cyan-400 truncate">
                  {currentRadiusMiles < 0.01 
                    ? currentRadiusMiles.toExponential(4) 
                    : currentRadiusMiles > 10000000
                    ? currentRadiusMiles.toExponential(4)
                    : currentRadiusMiles.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <span className="text-[11px] font-mono text-slate-500">mi</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Radius (Astron. Units)
                </span>
                <div className="font-heading text-lg sm:text-xl font-bold text-violet-400 truncate">
                  {currentRadiusAU < 0.0001
                    ? currentRadiusAU.toExponential(3)
                    : currentRadiusAU.toFixed(4)}
                </div>
                <span className="text-[11px] font-mono text-slate-500">AU (Earth-Sun dist)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GRAVITATIONAL TIME DILATION VISUALIZER */}
        <section className="p-6 sm:p-10 rounded-3xl glass-card-accent border border-white/10 shadow-2xl space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>TIME DILATION GEOMETRY</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Relativistic Time Dilation Visualizer
            </h2>
            <p className="text-xs text-slate-300">
              Formula: Δt_distant = Δt_proper / √(1 - R_s / r). As distance approaches the Event Horizon (r → R_s), time comes to a complete standstill for external observers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300">Distance from Singularity (r in units of R_s):</span>
                <span className="text-cyan-400 font-bold text-sm">{dilationDistanceR.toFixed(2)} R_s</span>
              </div>

              <input
                type="range"
                min="1.01"
                max="10.0"
                step="0.01"
                value={dilationDistanceR}
                onChange={(e) => setDilationDistanceR(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span className="text-rose-400">Event Horizon (1.0 R_s)</span>
                <span className="text-amber-400">Photon Sphere (1.5 R_s)</span>
                <span className="text-emerald-400">Weak Gravity (&gt; 10 R_s)</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-black/60 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">1 Hour on Your Watch:</span>
                <span className="text-white font-bold">1.00 Hour</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/10">
                <span className="text-slate-400">Passes for Distant Earth Observer:</span>
                <span className="text-cyan-300 font-bold text-base">
                  {timeDilationFactor > 1000
                    ? "Decades / Infinite"
                    : `${timeDilationFactor.toFixed(2)} Hours`}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 italic pt-1">
                {dilationDistanceR <= 1.05
                  ? "Extreme gravitational time dilation! Light waves emitted outward are red-shifted into extreme radio frequencies, and external universe time races ahead."
                  : dilationDistanceR <= 1.6
                  ? "In the vicinity of the photon sphere: severe gravitational lensing bends light into concentric circles around the event horizon."
                  : "Moderate general relativistic frame distortion: satellite clocks require minor relativistic corrections."}
              </p>
            </div>
          </div>
        </section>

        {/* 5. TYPES OF BLACK HOLES (Tabs & Specs) */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest">
              TAXONOMY OF VOIDS
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Classes of Black Holes
            </h2>
            <p className="text-sm text-slate-400">
              Categorized by mass and formation mechanisms across cosmological epochs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {BLACK_HOLE_TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTypeId(t.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  activeTypeId === t.id
                    ? "bg-[#ff8a3d]/20 border-[#ff8a3d] shadow-[0_0_20px_rgba(255,138,61,0.25)]"
                    : "glass-panel glass-panel-hover"
                }`}
              >
                <div className="text-xs font-mono text-[#ff8a3d] mb-1">Class</div>
                <div className="font-heading text-sm font-bold text-white">{t.name}</div>
              </button>
            ))}
          </div>

          {/* Active Type Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-700/80 space-y-4">
            <h3 className="font-heading text-xl font-bold text-white">{activeType.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{activeType.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-500 block">Mass Range</span>
                <span className="text-white font-medium">{activeType.massRange}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-500 block">Physical Horizon Size</span>
                <span className="text-white font-medium">{activeType.physicalSize}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-500 block">Known Examples</span>
                <span className="text-[#ff8a3d] font-medium">{activeType.knownExamples.join(", ")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAMOUS BLACK HOLES FACTS TABLE */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest">
              OBSERVED TITANS
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Famous Black Holes in the Universe
            </h2>
            <p className="text-sm text-slate-400">
              The benchmark cosmic laboratories verified through radio interferometry, X-ray binaries, and gravitational wave observatories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAMOUS_BLACK_HOLES.map((bh) => (
              <div
                key={bh.id}
                className="rounded-2xl glass-panel overflow-hidden border border-slate-700/80 flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={bh.image}
                    alt={bh.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-[#ff8a3d]">
                    {bh.spectralType}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-white">{bh.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{bh.significance}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs font-mono">
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-slate-500 block">Mass</span>
                      <span className="text-white">{bh.massSolarMasses}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-slate-500 block">Distance</span>
                      <span className="text-white">{bh.distanceLightYears}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-slate-500 block">Event Horizon</span>
                      <span className="text-cyan-400">{bh.schwarzschildRadiusKm}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-slate-500 block">Constellation</span>
                      <span className="text-white">{bh.constellation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. BLACK HOLE FAQS ACCORDION */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#ff8a3d]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Demystifying the Event Horizon
            </h2>
          </div>

          <div className="space-y-3">
            {BLACK_HOLE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-panel border border-slate-700/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-white hover:text-[#ff8a3d] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-subheading font-semibold">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#ff8a3d] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-black/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
