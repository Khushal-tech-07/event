import React, { useState, useEffect } from "react";
import { Disc3 } from "lucide-react";

export const IntroLoader: React.FC = () => {
  const [visible, setVisible] = useState(() => {
    // Check if user already saw the intro in this session
    return !sessionStorage.getItem("event_horizon_intro_seen");
  });
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("event_horizon_intro_seen", "true");
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, [visible]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("event_horizon_intro_seen", "true");
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030308] transition-opacity duration-700 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Accretion Disk Glow */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#ff8a3d]/20 via-[#7c5cff]/20 to-transparent blur-2xl animate-pulse" />

        {/* Outer Orbiting Photon Ring */}
        <div
          className="absolute w-36 h-36 rounded-full border-2 border-dashed border-[#ff8a3d]/60 animate-spin"
          style={{ animationDuration: "6s" }}
        />

        {/* Secondary Tilted Accretion Oval */}
        <div
          className="absolute w-44 h-16 rounded-[100%] border border-[#ffaa00]/80 shadow-[0_0_30px_rgba(255,138,61,0.6)] animate-spin"
          style={{ animationDuration: "3s" }}
        />

        {/* Central Black Hole Singularity */}
        <div className="relative w-20 h-20 rounded-full bg-black border border-white/20 shadow-[0_0_40px_rgba(0,0,0,1)] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff8a3d] to-[#7c5cff] opacity-40 blur-sm" />
        </div>
      </div>

      <div className="mt-8 text-center space-y-1.5">
        <h1 className="font-heading text-xl md:text-2xl font-bold tracking-[0.25em] text-white">
          EVENT<span className="text-[#ff8a3d]">·</span>HORIZON
        </h1>
        <p className="text-xs font-mono text-slate-400 tracking-widest uppercase">
          Initializing Cosmic Coordinates
        </p>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="mt-6 px-4 py-1.5 text-xs font-mono text-slate-500 hover:text-slate-300 border border-white/10 rounded-full transition-colors"
      >
        Skip Intro →
      </button>
    </div>
  );
};
