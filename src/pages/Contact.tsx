import React, { useState } from "react";
import { SEO } from "../components/common/SEO";
import { SITE_CONFIG } from "../config/appConfig";
import { 
  Mail, Send, CheckCircle2, MessageSquare, Sparkles, 
  HelpCircle, Twitter, Github, Youtube, Instagram 
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Astrophysics Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Contact & Collaborations - Event Horizon"
        description="Get in touch with the Event Horizon astrophysics team for research inquiries, guest articles, and cosmic speaking engagements."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO TITLE */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a3d]/15 border border-[#ff8a3d]/30 text-xs font-mono text-[#ff8a3d]">
            <Mail className="w-4 h-4 text-[#ff8a3d]" />
            <span>TRANSMIT A SIGNAL</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Contact & <span className="text-[#ff8a3d] accretion-glow">Collaborate</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Have a question on general relativity, wish to contribute an astrophysics guest essay, 
            or explore an observatory collaboration? We welcome communications from all sectors.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTACT FORM */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card-accent border border-slate-700/80 shadow-2xl space-y-6">
            <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#ff8a3d]" /> Send a Transmission
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Transmission Received</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Thank you, {formData.name}. Your message has been routed to Dr. Elena Vance's team. 
                  Expect an interstellar response within 48 Earth hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Astrophysics Inquiry", message: "" });
                  }}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">Your Name:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Carl Sagan"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">Email Address:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="astronomer@institute.edu"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">Topic / Subject:</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#ff8a3d]"
                  >
                    <option value="Astrophysics Inquiry">Astrophysics Question / Physics Discussion</option>
                    <option value="Guest Article Proposal">Guest Article / Essay Submission</option>
                    <option value="Observatory Collaboration">Telescope / Data Collaboration</option>
                    <option value="Speaking Engagement">Keynote / Podcast / Media Inquiry</option>
                    <option value="General Feedback">Website Feedback</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">Transmission Message:</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="State your hypothesis, question, or proposal..."
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff8a3d] to-[#e66c1f] text-slate-950 font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,138,61,0.3)]"
                >
                  <span>Transmit Transmission</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR: GUIDELINES & DIRECT LINKS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-panel border border-slate-700/80 space-y-4">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff8a3d]" /> Guest Authors & Essays
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We welcome submissions from researchers, university students, and amateur astronomers. 
                Articles should emphasize rigorous physical concepts, clear diagrams, and empirical references.
              </p>
              <div className="text-xs font-mono text-[#ff8a3d] space-y-1 pt-1">
                <div>• Minimum 800 words</div>
                <div>• Peer-reviewed citations appreciated</div>
                <div>• Original astrophotography welcomed</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-slate-700/80 space-y-4">
              <h3 className="font-heading text-lg font-bold text-white">
                Cosmic Social Channels
              </h3>
              <div className="space-y-2.5">
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-cyan-400" /> Twitter / X (@EventHorizonCosmos)
                  </span>
                  <span>Follow →</span>
                </a>

                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-rose-500" /> YouTube (Documentary Channel)
                  </span>
                  <span>Subscribe →</span>
                </a>

                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-300" /> GitHub (Astro Open Source)
                  </span>
                  <span>Star →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
