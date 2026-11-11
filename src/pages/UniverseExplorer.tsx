import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { PLANETS_DATA, DEEP_SKY_OBJECTS } from "../data/universe";
import { PlanetData } from "../types";
import { 
  Compass, Orbit, Sparkles, Scale, X, ChevronRight, 
  Thermometer, Moon, Globe, Sun, Wind, ArrowUpDown 
} from "lucide-react";

export const UniverseExplorer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  // Planet Comparison State
  const [comparePlanetAId, setComparePlanetAId] = useState<string>("earth");
  const [comparePlanetBId, setComparePlanetBId] = useState<string>("mars");

  // Deep Sky vs Solar System active tab
  const [activeTab, setActiveTab] = useState<"solar-system" | "deep-sky">("solar-system");

  // Filter planets by query parameter if present
  useEffect(() => {
    const planetParam = searchParams.get("planet");
    if (planetParam) {
      const match = PLANETS_DATA.find((p) => p.id === planetParam);
      if (match) setSelectedPlanet(match);
    }
  }, [searchParams]);

  const planetA = PLANETS_DATA.find((p) => p.id === comparePlanetAId) || PLANETS_DATA[2];
  const planetB = PLANETS_DATA.find((p) => p.id === comparePlanetBId) || PLANETS_DATA[3];

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Universe Explorer - Solar System & Deep Sky"
        description="Interactive Solar System explorer, side-by-side planetary stat comparison tool, nearby stars, nebulae, and galactic deep sky catalog."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO TITLE */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-400">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>INTERACTIVE COSMIC ATLAS</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Universe <span className="text-cyan-400 cyan-glow">Explorer</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Survey our celestial neighborhood. From the scorching basalt plains of Mercury 
            to the icy nitrogen heart of Pluto and distant stellar nurseries across the Milky Way.
          </p>

          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab("solar-system")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all border ${
                activeTab === "solar-system"
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_15px_rgba(79,209,255,0.4)]"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              Solar System (9 Worlds)
            </button>
            <button
              onClick={() => setActiveTab("deep-sky")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all border ${
                activeTab === "deep-sky"
                  ? "bg-violet-500 text-slate-950 border-violet-400 font-bold shadow-[0_0_15px_rgba(124,92,255,0.4)]"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              Deep Sky & Stars (Galaxies & Nebulae)
            </button>
          </div>
        </section>

        {/* 1. SOLAR SYSTEM SECTION */}
        {activeTab === "solar-system" && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-400" /> Worlds of Sol
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Click any planet to inspect full orbital telemetry, atmospheric chemistry, and gravitational data.
                </p>
              </div>
            </div>

            {/* Grid of 9 Planets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {PLANETS_DATA.map((planet) => (
                <div
                  key={planet.id}
                  onClick={() => setSelectedPlanet(planet)}
                  className="rounded-2xl glass-panel glass-panel-hover overflow-hidden border border-slate-700/80 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={planet.image}
                      alt={planet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300">
                        #{planet.orderFromSun} • {planet.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {planet.name}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                        {planet.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                      <div>
                        <span className="text-slate-500 block">Diameter</span>
                        <span className="text-white">{planet.diameterKm.toLocaleString()} km</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Gravity</span>
                        <span className="text-white">{planet.gravityMps2} m/s²</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Moons</span>
                        <span className="text-cyan-400">{planet.moonsCount}</span>
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-xl bg-white/5 group-hover:bg-cyan-500 group-hover:text-slate-950 text-xs font-mono text-slate-300 transition-colors flex items-center justify-center gap-1 mt-2">
                      <span>View Planet Telemetry</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. PLANET COMPARISON TOOL */}
            <div className="mt-16 p-6 sm:p-10 rounded-3xl glass-card-accent border border-slate-700/80 shadow-2xl space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
                  <Scale className="w-4 h-4 text-[#ff8a3d]" />
                  <span>SIDE-BY-SIDE TELEMETRY</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Planetary Comparison Tool
                </h3>
                <p className="text-xs text-slate-300">
                  Select two celestial worlds to compare physical dimensions, gravity, and orbital mechanics.
                </p>
              </div>

              {/* Selector Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 block">Planet Alpha:</label>
                  <select
                    value={comparePlanetAId}
                    onChange={(e) => setComparePlanetAId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-slate-700 text-sm font-semibold text-cyan-400 focus:outline-none focus:border-cyan-400"
                  >
                    {PLANETS_DATA.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.type})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 block">Planet Beta:</label>
                  <select
                    value={comparePlanetBId}
                    onChange={(e) => setComparePlanetBId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-slate-700 text-sm font-semibold text-amber-400 focus:outline-none focus:border-amber-400"
                  >
                    {PLANETS_DATA.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.type})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Comparison Stats Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="py-3 px-4">Metric</th>
                      <th className="py-3 px-4 text-cyan-400 font-bold">{planetA.name}</th>
                      <th className="py-3 px-4 text-amber-400 font-bold">{planetB.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Classification</td>
                      <td className="py-3 px-4">{planetA.type}</td>
                      <td className="py-3 px-4">{planetB.type}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Equatorial Diameter</td>
                      <td className="py-3 px-4">{planetA.diameterKm.toLocaleString()} km</td>
                      <td className="py-3 px-4">{planetB.diameterKm.toLocaleString()} km</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Surface Gravity</td>
                      <td className="py-3 px-4">{planetA.gravityMps2} m/s² ({(planetA.gravityMps2 / 9.807).toFixed(2)}g)</td>
                      <td className="py-3 px-4">{planetB.gravityMps2} m/s² ({(planetB.gravityMps2 / 9.807).toFixed(2)}g)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Mass (Earth Ratios)</td>
                      <td className="py-3 px-4">{planetA.massEarthRatio} M⊕</td>
                      <td className="py-3 px-4">{planetB.massEarthRatio} M⊕</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Length of Day</td>
                      <td className="py-3 px-4">{planetA.dayLengthHours} Hours</td>
                      <td className="py-3 px-4">{planetB.dayLengthHours} Hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Orbital Period</td>
                      <td className="py-3 px-4">{planetA.orbitPeriodEarthDays} Days</td>
                      <td className="py-3 px-4">{planetB.orbitPeriodEarthDays} Days</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Distance from Sun</td>
                      <td className="py-3 px-4">{planetA.distanceFromSunMillionKm} Million km</td>
                      <td className="py-3 px-4">{planetB.distanceFromSunMillionKm} Million km</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Mean Temperature</td>
                      <td className="py-3 px-4">{planetA.meanTemperatureC}°C</td>
                      <td className="py-3 px-4">{planetB.meanTemperatureC}°C</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">Confirmed Moons</td>
                      <td className="py-3 px-4 text-cyan-300 font-bold">{planetA.moonsCount}</td>
                      <td className="py-3 px-4 text-amber-300 font-bold">{planetB.moonsCount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* 2. DEEP SKY OBJECTS SECTION */}
        {activeTab === "deep-sky" && (
          <section className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" /> Deep Sky Catalog
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Neighboring stellar crucibles, nearest stars, and spiral galaxies in the local universe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DEEP_SKY_OBJECTS.map((obj) => (
                <div
                  key={obj.id}
                  className="rounded-2xl glass-panel overflow-hidden border border-slate-700/80 flex flex-col justify-between"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={obj.image}
                      alt={obj.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-violet-300">
                      {obj.type} • {obj.designation}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">{obj.name}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">{obj.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white/5">
                        <span className="text-slate-500 block">Distance</span>
                        <span className="text-white font-medium">{obj.distanceLightYears}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5">
                        <span className="text-slate-500 block">Constellation</span>
                        <span className="text-cyan-400 font-medium">{obj.constellation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PLANET DETAIL MODAL */}
        {selectedPlanet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedPlanet(null)}
            />

            <div className="relative w-full max-w-2xl bg-[#090b18] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
              {/* Header Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={selectedPlanet.image}
                  alt={selectedPlanet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b18] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedPlanet(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    #{selectedPlanet.orderFromSun} From the Sun • {selectedPlanet.type}
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-white">
                    {selectedPlanet.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPlanet.description}
                </p>

                {/* Fun Fact Callout */}
                <div className="p-4 rounded-2xl bg-[#ff8a3d]/10 border border-[#ff8a3d]/30 text-xs sm:text-sm text-[#ffaa55] flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#ff8a3d] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#ff8a3d]">Did you know? </span>
                    {selectedPlanet.funFact}
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Diameter</span>
                    <span className="text-white font-medium">{selectedPlanet.diameterKm.toLocaleString()} km</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Surface Gravity</span>
                    <span className="text-white font-medium">{selectedPlanet.gravityMps2} m/s²</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Day Length</span>
                    <span className="text-white font-medium">{selectedPlanet.dayLengthHours} Hours</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Year Length</span>
                    <span className="text-white font-medium">{selectedPlanet.orbitPeriodEarthDays} Days</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Mean Temp</span>
                    <span className="text-white font-medium">{selectedPlanet.meanTemperatureC}°C</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block">Natural Moons</span>
                    <span className="text-cyan-400 font-medium">{selectedPlanet.moonsCount}</span>
                  </div>
                </div>

                {/* Atmosphere */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    Atmospheric Constituents:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPlanet.atmosphere.map((gas, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300"
                      >
                        {gas}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
