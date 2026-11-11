import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../config/appConfig";
import { Disc3, Send, CheckCircle2, Github, Twitter, Youtube, Instagram, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#05060f]/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff8a3d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7c5cff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-block">
              <div className="w-8 h-8 rounded-full bg-black border border-[#ff8a3d] flex items-center justify-center shadow-[0_0_15px_rgba(255,138,61,0.5)]">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#ff8a3d] to-[#ff4500]" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                EVENT<span className="text-[#ff8a3d]">·</span>HORIZON
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An independent astrophysics publication and cosmos explorer chronicle. 
              Illuminating the frontiers of black hole thermodynamics, gravitational wave astronomy, 
              and planetary science for curious minds everywhere.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#ff8a3d] hover:border-[#ff8a3d]/40 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#ff8a3d] hover:border-[#ff8a3d]/40 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#ff8a3d] hover:border-[#ff8a3d]/40 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#ff8a3d] hover:border-[#ff8a3d]/40 transition-colors"
                aria-label="Instagram Gallery"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explorations */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Explorations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/black-holes" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Black Hole Physics
                </Link>
              </li>
              <li>
                <Link to="/explorer" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Solar System & Deep Sky
                </Link>
              </li>
              <li>
                <Link to="/missions" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Missions Timeline
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Astrophotography
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Cosmic Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academy & Knowledge */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Knowledge
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Articles & Essays
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/academy#quiz" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  Astrophysics Quiz
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  A-Z Cosmos Glossary
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#ff8a3d] transition-colors">
                  About Dr. Vance & Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ff8a3d]" /> Cosmic Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive monthly astrophysical breakdowns, telescope targets, and mission alerts directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Welcome to the Event Horizon family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="astronomer@deepspace.org"
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]/60"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-[#ff8a3d] text-slate-950 hover:bg-[#ff9d5c] transition-colors flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 block">No spam. Pure science. Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} EVENT HORIZON. Built for space dreamers & astrophysicists.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal" className="hover:text-slate-300 transition-colors">
              Terms of Exploration
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
