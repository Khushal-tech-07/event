import React from "react";
import { SEO } from "../components/common/SEO";
import { ShieldCheck, BookOpen } from "lucide-react";

export const Legal: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Privacy Policy & Terms of Exploration - Event Horizon"
        description="Privacy policy, terms of exploration, educational copyright, and cookies policy for the Event Horizon astrophysics platform."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#ff8a3d]" />
            <span>LEGAL & ARCHIVAL COMPLIANCE</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Terms of Exploration & Privacy
          </h1>

          <p className="text-xs font-mono text-slate-400">
            Last Updated: November 2026 • Astronomical Protocol Revision 3.2
          </p>
        </section>

        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Privacy */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              1. Privacy Policy & Zero Telemetry
            </h2>
            <p>
              Event Horizon is an educational and scientific non-commercial publication. We do not track personal identifying information, sell user data, or inject behavioral tracking pixels. All local learning path progress and quiz evaluations are strictly maintained within your browser's client-side <code className="text-xs font-mono bg-white/10 px-1.5 py-0.5 rounded text-[#ff8a3d]">localStorage</code> and never transmitted to third parties.
            </p>
          </div>

          {/* Educational Content & Attribution */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-heading text-xl font-bold text-white">
              2. Scientific Attribution & Fair Use
            </h2>
            <p>
              Observational telemetry, public astronomical imagery from NASA, ESA, JAXA, ESO, and Event Horizon Telescope collaborations are utilized under fair-use scientific educational dissemination guidelines. All mathematical equations, general relativity formulations, and cosmological datasets reflect peer-reviewed consensus and published astrophysical catalogs.
            </p>
          </div>

          {/* Terms */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-heading text-xl font-bold text-white">
              3. Terms of Use & Simulations
            </h2>
            <p>
              All interactive relativistic calculators (Schwarzschild radius, gravitational time dilation, and orbital mechanics tools) are provided for intuitive educational demonstration. While scientifically grounded, numerical relativistic solutions for actual flight planning or mission trajectory computations require higher-order post-Newtonian tensor corrections.
            </p>
          </div>

          {/* Open Source */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-heading text-xl font-bold text-white">
              4. Open Science & Reproduction
            </h2>
            <p>
              Articles, diagrams, and educational assets may be shared, cited, and referenced in academic curricula with appropriate attribution to Dr. Elena Vance and the Event Horizon chronicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
