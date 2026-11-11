import React, { useState } from "react";
import { SEO } from "../components/common/SEO";
import { 
  Calculator, Scale, Clock, Moon, Sun, Sparkles, 
  Orbit, Compass, ArrowRight, Eye, Telescope 
} from "lucide-react";

export const Tools: React.FC = () => {
  // 1. Schwarzschild Calculator
  const [bhMass, setBhMass] = useState<number>(10); // Solar Masses
  const KM_PER_SOLAR_MASS = 2.95325;
  const radiusKm = bhMass * KM_PER_SOLAR_MASS;

  // 2. Weight on Other Planets
  const [earthWeight, setEarthWeight] = useState<number>(70); // kg or lbs
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");

  // Relative surface gravity compared to Earth (g_planet / g_earth)
  const planetGravities = [
    { name: "Mercury", ratio: 0.38, color: "#a39f99" },
    { name: "Venus", ratio: 0.91, color: "#e3bb76" },
    { name: "Earth", ratio: 1.0, color: "#3b82f6" },
    { name: "Moon", ratio: 0.166, color: "#e2e8f0" },
    { name: "Mars", ratio: 0.38, color: "#ef4444" },
    { name: "Jupiter", ratio: 2.53, color: "#d97706" },
    { name: "Saturn", ratio: 1.07, color: "#f59e0b" },
    { name: "Uranus", ratio: 0.89, color: "#06b6d4" },
    { name: "Neptune", ratio: 1.14, color: "#2563eb" },
    { name: "Pluto", ratio: 0.063, color: "#c084fc" },
    { name: "Sun", ratio: 27.9, color: "#f97316" },
  ];

  // 3. Age on Other Planets
  const [earthAge, setEarthAge] = useState<number>(25); // years

  const planetYears = [
    { name: "Mercury", orbitalDays: 88, color: "#a39f99" },
    { name: "Venus", orbitalDays: 224.7, color: "#e3bb76" },
    { name: "Earth", orbitalDays: 365.25, color: "#3b82f6" },
    { name: "Mars", orbitalDays: 687, color: "#ef4444" },
    { name: "Jupiter", orbitalDays: 4333, color: "#d97706" },
    { name: "Saturn", orbitalDays: 10759, color: "#f59e0b" },
    { name: "Uranus", orbitalDays: 30687, color: "#06b6d4" },
    { name: "Neptune", orbitalDays: 60190, color: "#2563eb" },
    { name: "Pluto", orbitalDays: 90560, color: "#c084fc" },
  ];

  // 4. Light Travel Time Calculator
  const [lightDistance, setLightDistance] = useState<number>(1);
  const [distanceUnit, setDistanceUnit] = useState<"AU" | "million-km" | "light-years">("AU");

  // Speed of light = 299,792.458 km/s
  // 1 AU = 149,597,870.7 km (takes 499.005 seconds = 8.316 minutes)
  const calculateLightTravelTime = () => {
    let distanceKm = 0;
    if (distanceUnit === "AU") {
      distanceKm = lightDistance * 149597870.7;
    } else if (distanceUnit === "million-km") {
      distanceKm = lightDistance * 1000000;
    } else {
      // Light-years: by definition takes 'lightDistance' years!
      return `${lightDistance.toFixed(2)} Years`;
    }

    const totalSeconds = distanceKm / 299792.458;
    if (totalSeconds < 60) {
      return `${totalSeconds.toFixed(2)} Seconds`;
    } else if (totalSeconds < 3600) {
      const mins = Math.floor(totalSeconds / 60);
      const secs = Math.round(totalSeconds % 60);
      return `${mins} min ${secs} sec`;
    } else if (totalSeconds < 86400) {
      const hours = (totalSeconds / 3600).toFixed(2);
      return `${hours} Hours`;
    } else {
      const days = (totalSeconds / 86400).toFixed(2);
      return `${days} Days`;
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Cosmic Tools & Calculators - Event Horizon"
        description="Interactive astrophysics calculators: weight on other planets, age on other planets, light travel time, Schwarzschild radius, and tonight's sky guide."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO TITLE */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>INTERACTIVE COMPUTATIONAL SUITE</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Cosmic <span className="text-cyan-400 cyan-glow">Tools</span> & Calculators
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Translate celestial mechanics into personal intuitive scales. 
            Test your weight on Jupiter, compute your age on Neptune, and track photons across the void.
          </p>
        </section>

        {/* 1. TONIGHT'S SKY GUIDE & MOON PHASE CARD */}
        <section className="p-6 sm:p-8 rounded-3xl glass-card-accent border border-slate-700/80 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
                <Moon className="w-4 h-4 text-[#ff8a3d]" />
                <span>EPHEMERIS & STARGAZING GUIDE</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                What's in the Sky Tonight?
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              Autumn Sky • Mid-Northern Latitudes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {/* Moon Phase */}
            <div className="p-5 rounded-2xl glass-panel space-y-2 border border-slate-700/60">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
                Lunar Phase
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center relative overflow-hidden">
                  <div className="w-5 h-10 bg-amber-200 rounded-l-full ml-auto" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white">Waxing Gibbous</div>
                  <div className="text-xs text-amber-300 font-mono">78% Illumination</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Ideal for lunar crater rim contrast along the terminator (Copernicus & Tycho craters).
              </p>
            </div>

            {/* Naked-Eye Planets */}
            <div className="p-5 rounded-2xl glass-panel space-y-2 border border-slate-700/60">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block">
                Visible Planets Tonight
              </span>
              <ul className="text-xs space-y-1.5 text-slate-300 font-mono">
                <li className="flex justify-between">
                  <span className="text-white">Jupiter:</span>
                  <span className="text-amber-400">Mag -2.8 (Taurus, All Night)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white">Saturn:</span>
                  <span className="text-amber-300">Mag +0.6 (Aquarius, Evening)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white">Mars:</span>
                  <span className="text-rose-400">Mag -0.3 (Gemini, Midnight)</span>
                </li>
              </ul>
            </div>

            {/* Deep Sky Target */}
            <div className="p-5 rounded-2xl glass-panel space-y-2 border border-slate-700/60">
              <span className="text-[11px] font-mono text-violet-400 uppercase tracking-widest block">
                Prime Binocular Target
              </span>
              <div className="font-heading text-sm font-bold text-white">
                Andromeda Galaxy (M31)
              </div>
              <p className="text-xs text-slate-300">
                High overhead near zenith. Visible as an elongated fuzzy oval in 10x50 binoculars 
                under moderate suburban skies.
              </p>
            </div>
          </div>
        </section>

        {/* 2. WEIGHT ON OTHER WORLDS */}
        <section className="p-6 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl space-y-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
              <Scale className="w-4 h-4 text-[#ff8a3d]" />
              <span>GRAVITATIONAL SCALING</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Your Weight on Other Planets & Stars
            </h2>
            <p className="text-xs text-slate-400">
              Your mass remains invariant, but the gravitational acceleration g = GM/r² varies wildly across the Solar System.
            </p>
          </div>

          {/* Input Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-300">Enter Earth Weight:</span>
              <input
                type="number"
                min="1"
                max="1000"
                value={earthWeight}
                onChange={(e) => setEarthWeight(Math.max(1, parseFloat(e.target.value) || 0))}
                className="w-28 px-3.5 py-2 rounded-xl bg-black/60 border border-slate-700 text-sm font-mono text-white focus:outline-none focus:border-[#ff8a3d]"
              />
            </div>

            <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-slate-700 text-xs font-mono">
              <button
                onClick={() => setWeightUnit("kg")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  weightUnit === "kg" ? "bg-[#ff8a3d] text-slate-950 font-bold" : "text-slate-400"
                }`}
              >
                kg
              </button>
              <button
                onClick={() => setWeightUnit("lbs")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  weightUnit === "lbs" ? "bg-[#ff8a3d] text-slate-950 font-bold" : "text-slate-400"
                }`}
              >
                lbs
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
            {planetGravities.map((p) => {
              const calcWeight = (earthWeight * p.ratio).toFixed(1);
              return (
                <div
                  key={p.name}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 hover:border-[#ff8a3d]/40 transition-colors"
                >
                  <span className="text-xs font-bold text-white block">{p.name}</span>
                  <div className="font-heading text-lg sm:text-xl font-bold text-[#ff8a3d]">
                    {calcWeight}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {weightUnit} ({p.ratio}g)
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. AGE ON OTHER PLANETS */}
        <section className="p-6 sm:p-10 rounded-3xl glass-card-accent border border-slate-700/80 shadow-2xl space-y-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 uppercase tracking-wider">
              <Orbit className="w-4 h-4 text-violet-400" />
              <span>ORBITAL REVOLUTIONS</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Your Age on Other Planets
            </h2>
            <p className="text-xs text-slate-400">
              One planetary year equals one complete orbital revolution around the Sun.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-300">Enter Your Earth Age:</span>
            <input
              type="number"
              min="1"
              max="130"
              value={earthAge}
              onChange={(e) => setEarthAge(Math.max(1, parseFloat(e.target.value) || 0))}
              className="w-28 px-3.5 py-2 rounded-xl bg-black/60 border border-slate-700 text-sm font-mono text-white focus:outline-none focus:border-violet-400"
            />
            <span className="text-xs font-mono text-slate-400">Earth Years</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {planetYears.map((p) => {
              const planetAge = (earthAge * 365.25) / p.orbitalDays;
              return (
                <div
                  key={p.name}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 hover:border-violet-400/40 transition-colors"
                >
                  <span className="text-xs font-bold text-white block">{p.name}</span>
                  <div className="font-heading text-lg sm:text-xl font-bold text-violet-300">
                    {planetAge < 0.1 ? planetAge.toFixed(3) : planetAge.toFixed(1)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    Orbital Years
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. LIGHT TRAVEL TIME CALCULATOR */}
        <section className="p-6 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>PHOTON DURATION CALCULATOR</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Light Travel Time Across Cosmic Distances
            </h2>
            <p className="text-xs text-slate-400">
              Photons travel at c = 299,792.458 km/s in vacuum. See how long light takes to bridge the void.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">Enter Distance:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0.1"
                    step="any"
                    value={lightDistance}
                    onChange={(e) => setLightDistance(parseFloat(e.target.value) || 0)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
                  />
                  <select
                    value={distanceUnit}
                    onChange={(e) => setDistanceUnit(e.target.value as any)}
                    className="px-3 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="AU">Astronomical Units (AU)</option>
                    <option value="million-km">Million Kilometers (M km)</option>
                    <option value="light-years">Light-Years (ly)</option>
                  </select>
                </div>
              </div>

              {/* Quick Distance Presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => {
                    setLightDistance(1);
                    setDistanceUnit("AU");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-300"
                >
                  Sun to Earth (1 AU)
                </button>
                <button
                  onClick={() => {
                    setLightDistance(0.384);
                    setDistanceUnit("million-km");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-300"
                >
                  Earth to Moon (384,400 km)
                </button>
                <button
                  onClick={() => {
                    setLightDistance(4.246);
                    setDistanceUnit("light-years");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-300"
                >
                  Proxima Centauri (4.25 ly)
                </button>
              </div>
            </div>

            {/* Travel Time Display */}
            <div className="p-6 rounded-2xl bg-black/60 border border-slate-700 text-center space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                Calculated Photon Flight Time
              </span>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-cyan-400">
                {calculateLightTravelTime()}
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                When you gaze at this celestial object, you are literally looking backward into the past by this exact amount of time.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
