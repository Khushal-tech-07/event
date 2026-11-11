import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { Compass, Disc3, ArrowLeft, RotateCcw } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 flex items-center justify-center px-4 py-24">
      <SEO
        title="404 - Lost in the Void"
        description="The requested spacetime coordinates do not exist beyond the event horizon."
      />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        {/* Glowing Singularity Graphic */}
        <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff8a3d]/30 via-violet-500/20 to-transparent blur-xl animate-pulse" />
          <div className="w-24 h-24 rounded-full bg-black border-2 border-[#ff8a3d] shadow-[0_0_30px_rgba(255,138,61,0.5)] flex items-center justify-center">
            <span className="font-heading text-2xl font-black text-white">404</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest">
            COORDINATE ERROR: SINGULARITY REACHED
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Lost in the Void
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The page you are searching for has slipped past the event horizon. 
            All causal geodesics lead to nowhere. Let's redirect your thrusters back to safe spacetime.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff8a3d] to-[#e66c1f] text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Return to Orbit (Home)</span>
          </Link>

          <Link
            to="/black-holes"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-white flex items-center justify-center gap-2"
          >
            <Disc3 className="w-4 h-4 text-[#ff8a3d]" />
            <span>Simulate Black Hole</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
