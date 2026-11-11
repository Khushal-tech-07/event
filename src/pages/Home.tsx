import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { BLOG_POSTS } from "../data/posts";
import { 
  ArrowRight, Sparkles, Disc3, Compass, Telescope, 
  Rocket, BookOpen, ChevronDown, Calendar, Clock, 
  ChevronLeft, ChevronRight, CheckCircle2, Send, Orbit 
} from "lucide-react";

const DID_YOU_KNOW_FACTS = [
  {
    fact: "If you fell into a supermassive black hole like M87*, you could cross the event horizon without feeling torn apart immediately, because its tidal gradient at the boundary is gentler than Earth's gravity.",
    topic: "Black Hole Relativity",
  },
  {
    fact: "One teaspoon of neutron star material would weigh approximately 6 billion tons on Earth—about the weight of Mount Everest.",
    topic: "Stellar Remnants",
  },
  {
    fact: "Light from the Sun takes 8 minutes and 20 seconds to reach Earth, but photons created in the Sun's core can take over 100,000 years to wander out through the dense radiative zone.",
    topic: "Solar Physics",
  },
  {
    fact: "On Venus, snow is made of metal—specifically bismuth and lead sulfides condensed out of volcanic vapors on high mountain peaks.",
    topic: "Planetary Science",
  },
  {
    fact: "The James Webb Space Telescope's mirrors are coated in pure 24-karat gold just 100 nanometers thick—using only 48 grams of gold total across all 18 segments.",
    topic: "Space Observatories",
  },
];

export const Home: React.FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Rotating facts carousel interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const latestPosts = BLOG_POSTS.slice(1, 7);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterDone(true);
    setNewsletterEmail("");
  };

  return (
    <div className="relative min-h-screen text-slate-100">
      <SEO
        title="Event Horizon - Space & Astronomy Odyssey"
        description="Journey beyond the threshold of known physics. An immersive space and astronomy blog, portfolio, and cosmos explorer."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden">
        {/* Subtle radial center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff8a3d]/15 via-[#7c5cff]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ff8a3d] backdrop-blur-md shadow-[0_0_15px_rgba(255,138,61,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff8a3d]" />
            <span>ASTROPHYSICS • COSMOLOGY • SPACE EXPLORATION</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
            Journey Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffaa55] to-[#ff8a3d] accretion-glow">
              The Event Horizon
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-subheading text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Where spacetime bends, singularities whisper, and the cosmos reveals its deepest enigmas. 
            Step across the threshold of human curiosity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/explorer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff8a3d] to-[#e66c1f] text-slate-950 font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,138,61,0.4)] group"
            >
              <Compass className="w-4 h-4 text-slate-950 group-hover:rotate-45 transition-transform" />
              <span>Start Exploring</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/blog"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-medium text-sm hover:bg-white/10 hover:border-[#ff8a3d]/40 transition-all backdrop-blur-md flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#ff8a3d]" />
              <span>Read the Blog</span>
            </Link>

            <Link
              to="/black-holes"
              className="px-6 py-3 rounded-xl bg-[#7c5cff]/20 border border-[#7c5cff]/40 text-violet-200 font-medium text-sm hover:bg-[#7c5cff]/30 transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Disc3 className="w-4 h-4 text-violet-400" />
              <span>Black Hole Simulator</span>
            </Link>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-slate-400 font-mono">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-[#ff8a3d] animate-bounce" />
        </div>
      </section>

      {/* 2. ANIMATED STATS COUNTERS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl shadow-2xl">
          <div className="text-center space-y-1 p-2">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-white">
              24<span className="text-[#ff8a3d]">+</span>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Articles Published
            </div>
          </div>
          <div className="text-center space-y-1 p-2">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-cyan-400">
              12
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Missions Documented
            </div>
          </div>
          <div className="text-center space-y-1 p-2">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-violet-400">
              46.5B
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Light-Years Mapped
            </div>
          </div>
          <div className="text-center space-y-1 p-2">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-amber-400">
              85,000<span className="text-[#ff8a3d]">+</span>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Curious Readers
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DID YOU KNOW?" ROTATING FACTS CAROUSEL */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-6 sm:p-8 rounded-2xl glass-card-accent relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#ff8a3d]" />
              <span>Cosmic Fact • {DID_YOU_KNOW_FACTS[currentFactIndex].topic}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  setCurrentFactIndex(
                    (prev) => (prev - 1 + DID_YOU_KNOW_FACTS.length) % DID_YOU_KNOW_FACTS.length
                  )
                }
                className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Previous fact"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-1">
                {currentFactIndex + 1}/{DID_YOU_KNOW_FACTS.length}
              </span>
              <button
                onClick={() =>
                  setCurrentFactIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length)
                }
                className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Next fact"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-200 font-subheading leading-relaxed italic">
            "{DID_YOU_KNOW_FACTS[currentFactIndex].fact}"
          </p>
        </div>
      </section>

      {/* 4. FEATURED POST & LATEST POSTS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest mb-1.5">
              CURATED ASTRONOMY
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Dispatch from the Cosmos
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-xs font-mono text-[#ff8a3d] hover:text-[#ffaa55] flex items-center gap-1"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Large Card */}
        {featuredPost && (
          <div className="mb-10">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block relative rounded-2xl overflow-hidden glass-panel glass-panel-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#090b16]" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#ff8a3d] text-slate-950 text-xs font-bold font-mono tracking-wider">
                    FEATURED ESSAY
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="text-[#ff8a3d]">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff8a3d] transition-colors leading-snug">
                      {featuredPost.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-[#ff8a3d]/40"
                      />
                      <div className="text-xs">
                        <div className="text-white font-medium">{featuredPost.author.name}</div>
                        <div className="text-slate-400">{featuredPost.date}</div>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-[#ff8a3d] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 6 Latest Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl glass-panel glass-panel-hover overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs font-mono text-cyan-300">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="font-heading text-base font-bold text-white group-hover:text-[#ff8a3d] transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{post.author.name}</span>
                  <span className="text-[#ff8a3d] font-mono">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. FEATURED TOPICS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest mb-1">
            CORE DOMAINS
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Pillars of Cosmic Exploration
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Navigate through our curated domains of theoretical physics, observational astronomy, and planetary exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link
            to="/black-holes"
            className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ff8a3d]/15 border border-[#ff8a3d]/30 flex items-center justify-center text-[#ff8a3d] group-hover:scale-110 transition-transform">
              <Disc3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-white group-hover:text-[#ff8a3d] transition-colors">
                Black Holes
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Singularities, Kerr metrics, Hawking radiation, and extreme tidal curvature.
              </p>
            </div>
            <span className="text-xs font-mono text-[#ff8a3d] flex items-center gap-1">
              Explore →
            </span>
          </Link>

          <Link
            to="/explorer"
            className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Orbit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                Galaxies
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Spiral arms, active galactic nuclei, dark matter halos, and cosmic webs.
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
              Explore →
            </span>
          </Link>

          <Link
            to="/explorer"
            className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                Exoplanets
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Subsurface ocean moons, TRAPPIST-1 worlds, and atmospheric biosignatures.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              Explore →
            </span>
          </Link>

          <Link
            to="/missions"
            className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                Missions
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                From Apollo and Voyager to James Webb, Artemis, and interplanetary Starship.
              </p>
            </div>
            <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
              Explore →
            </span>
          </Link>

          <Link
            to="/tools"
            className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <Telescope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-white group-hover:text-violet-400 transition-colors">
                Cosmology & Tools
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Big Bang nucleosynthesis, cosmic inflation, and interactive relativistic calculators.
              </p>
            </div>
            <span className="text-xs font-mono text-violet-400 flex items-center gap-1">
              Explore →
            </span>
          </Link>
        </div>
      </section>

      {/* 6. PHOTO OF THE DAY (APOD STYLE) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl glass-card-accent p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
              <img
                src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1400&q=80"
                alt="Cosmic Cliffs of the Carina Nebula"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300">
                ASTRONOMY PHOTO OF THE DAY
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
                TODAY'S CELESTIAL TARGET
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Cosmic Cliffs in the Carina Nebula (NGC 3372)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Captured in piercing infrared light, this edge of a gigantic gaseous cavity reveals 
                previously hidden infant protostars. The blistering ultraviolet radiation and stellar winds 
                from extremely massive, hot young stars are carving the wall of the nebula, shaping towers of cool dense hydrogen.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-400">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-500 block">Distance</span>
                  <span className="text-white font-medium">8,500 Light-Years</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-500 block">Constellation</span>
                  <span className="text-white font-medium">Carina (The Keel)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#ff8a3d] hover:text-[#ffaa55]"
                >
                  <span>Open Full Astrophotography Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SIGNUP BANNER */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101426] to-[#070914] border border-slate-700/80 shadow-2xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ff8a3d]/20 border border-[#ff8a3d]/40 flex items-center justify-center text-[#ff8a3d] mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Stay Tuned to the Cosmos
          </h2>

          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Join thousands of stargazers and researchers receiving our monthly deep-dive newsletter 
            covering breaking discoveries, telescope observations, and physics breakthroughs.
          </p>

          {newsletterDone ? (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm inline-flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>You're on the list! Watch your inbox for cosmic transmissions.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your astronomer email..."
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff8a3d]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#ff8a3d] text-slate-950 font-bold text-sm hover:bg-[#ff9d5c] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
