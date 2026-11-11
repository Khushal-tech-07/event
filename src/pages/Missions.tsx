import React, { useState, useEffect } from "react";
import { SEO } from "../components/common/SEO";
import { SPACE_MISSIONS } from "../data/missions";
import { SpaceMission } from "../types";
import { 
  Rocket, Clock, Calendar, CheckCircle, Flame, 
  Sparkles, Filter, ChevronRight, X, ExternalLink 
} from "lucide-react";

export const Missions: React.FC = () => {
  const [selectedAgency, setSelectedAgency] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedMission, setSelectedMission] = useState<SpaceMission | null>(null);

  // Live countdown ticker state (updates every second)
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const agencies = ["All", "NASA", "ESA", "ISRO", "JAXA", "SpaceX", "Roscosmos", "CNSA"];
  const statuses = ["All", "Past", "Active", "Upcoming"];

  const filteredMissions = SPACE_MISSIONS.filter((m) => {
    const agencyMatch = selectedAgency === "All" || m.agency === selectedAgency;
    const statusMatch = selectedStatus === "All" || m.status === selectedStatus;
    return agencyMatch && statusMatch;
  });

  const upcomingMissions = SPACE_MISSIONS.filter((m) => m.status === "Upcoming");

  // Calculate remaining time helper
  const getCountdown = (targetTimestamp?: number) => {
    if (!targetTimestamp) return null;
    const diff = Math.max(0, targetTimestamp - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Space Missions Timeline - From Sputnik to Interplanetary Voyages"
        description="Comprehensive timeline of mankind's greatest orbital voyages, deep-space probes, planetary rovers, and live launch countdowns."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO HEADER */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-xs font-mono text-amber-400">
            <Rocket className="w-4 h-4 text-amber-400" />
            <span>INTERPLANETARY EXPEDITIONS</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Missions & <span className="text-amber-400">Voyages</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            From the pioneering radio beeps of Sputnik 1 to the interstellar crossing of Voyager 1 
            and next-generation Martian aerocapture with Starship.
          </p>
        </section>

        {/* 1. UPCOMING LAUNCHES LIVE COUNTDOWN BANNER */}
        {upcomingMissions.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>UPCOMING MISSION COUNTDOWN TIMERS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingMissions.map((mission) => {
                const countdown = getCountdown(mission.scheduledLaunchTimestamp);
                return (
                  <div
                    key={mission.id}
                    className="p-6 rounded-3xl glass-card-accent border border-amber-500/30 shadow-2xl relative overflow-hidden space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono">
                        {mission.agency} • Targeted for {mission.launchDateString}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Scheduled
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {mission.name}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                        {mission.objective}
                      </p>
                    </div>

                    {countdown && (
                      <div className="grid grid-cols-4 gap-2 pt-2 text-center font-mono">
                        <div className="p-2.5 rounded-xl bg-black/60 border border-slate-700">
                          <span className="text-lg sm:text-2xl font-bold text-amber-400 block">{countdown.days}</span>
                          <span className="text-[10px] text-slate-400 uppercase">Days</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/60 border border-slate-700">
                          <span className="text-lg sm:text-2xl font-bold text-white block">{countdown.hours}</span>
                          <span className="text-[10px] text-slate-400 uppercase">Hours</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/60 border border-slate-700">
                          <span className="text-lg sm:text-2xl font-bold text-white block">{countdown.minutes}</span>
                          <span className="text-[10px] text-slate-400 uppercase">Mins</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/60 border border-slate-700">
                          <span className="text-lg sm:text-2xl font-bold text-cyan-400 block">{countdown.seconds}</span>
                          <span className="text-[10px] text-slate-400 uppercase">Secs</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 2. FILTERS (Agency & Status) */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-700/80 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Agency Chips */}
            <div className="space-y-1.5 w-full">
              <span className="text-xs font-mono text-slate-400 block">Space Agency:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {agencies.map((agency) => (
                  <button
                    key={agency}
                    onClick={() => setSelectedAgency(agency)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono transition-all border whitespace-nowrap ${
                      selectedAgency === agency
                        ? "bg-amber-400 text-slate-950 border-amber-400 font-bold"
                        : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    {agency}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Chips */}
            <div className="space-y-1.5 md:w-80">
              <span className="text-xs font-mono text-slate-400 block">Mission Status:</span>
              <div className="flex items-center gap-1.5">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono transition-all border ${
                      selectedStatus === status
                        ? "bg-[#ff8a3d] text-slate-950 border-[#ff8a3d] font-bold"
                        : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. TIMELINE & MISSION CARDS */}
        <section className="space-y-6">
          <div className="text-xs font-mono text-slate-400">
            Showing {filteredMissions.length} space missions across history:
          </div>

          <div className="relative border-l-2 border-slate-700/80 pl-6 sm:pl-10 space-y-12 ml-4 sm:ml-8">
            {filteredMissions.map((mission) => (
              <div key={mission.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-[#ff8a3d] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(255,138,61,0.5)]" />

                {/* Card */}
                <div
                  onClick={() => setSelectedMission(mission)}
                  className="rounded-2xl glass-panel glass-panel-hover border border-slate-700/80 p-6 cursor-pointer space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-heading font-bold text-[#ff8a3d]">
                        {mission.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {mission.agency}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        {mission.target}
                      </span>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                      mission.status === "Active"
                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                        : mission.status === "Upcoming"
                        ? "bg-amber-950/80 text-amber-300 border border-amber-500/40"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}>
                      {mission.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#ff8a3d] transition-colors">
                      {mission.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                      {mission.objective}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1 pt-2">
                    {mission.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-[#ff8a3d] font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-end text-xs font-mono text-[#ff8a3d]">
                    <span>Inspect Mission Record →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION DETAIL MODAL */}
        {selectedMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedMission(null)}
            />

            <div className="relative w-full max-w-xl bg-[#090b18] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedMission.image}
                  alt={selectedMission.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b18] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedMission(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-mono text-amber-400">
                    {selectedMission.agency} • Launched {selectedMission.launchDateString || selectedMission.year}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {selectedMission.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Primary Objective:
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedMission.objective}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#ff8a3d] uppercase tracking-wider block">
                    Key Milestones & Discoveries:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {selectedMission.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
