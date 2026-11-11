import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "../../config/appConfig";
import { BLOG_POSTS } from "../../data/posts";
import { PLANETS_DATA } from "../../data/universe";
import { SPACE_MISSIONS } from "../../data/missions";
import { GLOSSARY_TERMS } from "../../data/glossary";
import { 
  Menu, X, Search, Compass, Disc3, BookOpen, Rocket, 
  Sparkles, Layers, Sliders, ChevronRight 
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [location.pathname]);

  // Keyboard shortcut Ctrl/Cmd + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Quick universal search results
  const q = searchQuery.toLowerCase().trim();
  const searchResults = q
    ? {
        posts: BLOG_POSTS.filter((p) => p.title.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))).slice(0, 3),
        planets: PLANETS_DATA.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 2),
        missions: SPACE_MISSIONS.filter((m) => m.name.toLowerCase().includes(q) || m.objective.toLowerCase().includes(q)).slice(0, 2),
        terms: GLOSSARY_TERMS.filter((t) => t.term.toLowerCase().includes(q)).slice(0, 3),
      }
    : null;

  const totalResultsCount = searchResults
    ? searchResults.posts.length + searchResults.planets.length + searchResults.missions.length + searchResults.terms.length
    : 0;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050711]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-[#030308]/90 via-[#030308]/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-full bg-black border border-[#ff8a3d]/80 flex items-center justify-center shadow-[0_0_15px_rgba(255,138,61,0.4)] group-hover:shadow-[0_0_25px_rgba(255,138,61,0.7)] transition-all">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#ff8a3d] to-[#ff4500] group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 rounded-full border border-violet-400/40 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-wider text-white group-hover:text-[#ff8a3d] transition-colors">
                  EVENT<span className="text-[#ff8a3d]">·</span>HORIZON
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1 hidden sm:block">
                  ASTRONOMY & COSMOS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {SITE_CONFIG.navLinks.slice(0, 9).map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#ff8a3d] bg-white/5 border border-[#ff8a3d]/30 shadow-[0_0_12px_rgba(255,138,61,0.15)]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Search Button & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff8a3d]/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
                title="Search the cosmos (Ctrl+K)"
                aria-label="Search articles and cosmos data"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#ff8a3d]" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-slate-800 rounded border border-slate-700 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              <Link
                to="/black-holes"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#ff8a3d] to-[#e66c1f] text-slate-950 font-semibold text-xs hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,138,61,0.35)]"
              >
                <Disc3 className="w-3.5 h-3.5" />
                <span>Simulate</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-[#070914] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-heading font-bold text-white tracking-wider">NAVIGATION</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                {SITE_CONFIG.navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#ff8a3d]/15 text-[#ff8a3d] border border-[#ff8a3d]/30"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-slate-500 font-mono">
                EVENT HORIZON • {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Universal Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSearchModalOpen(false)}
          />

          <div className="relative w-full max-w-2xl bg-[#090b16] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/5">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search black holes, planets, missions, articles, terms..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Window */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              {!searchQuery && (
                <div className="py-8 text-center text-slate-500 text-sm">
                  <p>Type to search across the entire cosmic archives.</p>
                  <p className="text-xs mt-1 text-slate-600">Try "Schwarzschild", "James Webb", "Mars", or "Singularity"</p>
                </div>
              )}

              {searchQuery && totalResultsCount === 0 && (
                <div className="py-8 text-center text-slate-400 text-sm">
                  No astronomical records found for "{searchQuery}".
                </div>
              )}

              {searchResults && (
                <>
                  {/* Blog Posts */}
                  {searchResults.posts.length > 0 && (
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#ff8a3d] mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Articles ({searchResults.posts.length})
                      </div>
                      <div className="space-y-1.5">
                        {searchResults.posts.map((post) => (
                          <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            onClick={() => setSearchModalOpen(false)}
                            className="block p-2.5 rounded-xl bg-white/5 hover:bg-[#ff8a3d]/10 hover:border-[#ff8a3d]/30 border border-transparent transition-all"
                          >
                            <div className="text-sm font-medium text-white">{post.title}</div>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">{post.excerpt}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Planets */}
                  {searchResults.planets.length > 0 && (
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5" /> Planets ({searchResults.planets.length})
                      </div>
                      <div className="space-y-1.5">
                        {searchResults.planets.map((planet) => (
                          <Link
                            key={planet.id}
                            to={`/explorer?planet=${planet.id}`}
                            onClick={() => setSearchModalOpen(false)}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-cyan-950/40 hover:border-cyan-500/30 border border-transparent transition-all"
                          >
                            <div>
                              <span className="text-sm font-medium text-white">{planet.name}</span>
                              <span className="ml-2 text-xs text-slate-400">{planet.type} • {planet.diameterKm.toLocaleString()} km</span>
                            </div>
                            <span className="text-xs text-cyan-400 font-mono">View in Explorer →</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Missions */}
                  {searchResults.missions.length > 0 && (
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                        <Rocket className="w-3.5 h-3.5" /> Missions ({searchResults.missions.length})
                      </div>
                      <div className="space-y-1.5">
                        {searchResults.missions.map((m) => (
                          <Link
                            key={m.id}
                            to={`/missions?mission=${m.id}`}
                            onClick={() => setSearchModalOpen(false)}
                            className="block p-2.5 rounded-xl bg-white/5 hover:bg-amber-950/40 hover:border-amber-500/30 border border-transparent transition-all"
                          >
                            <div className="text-sm font-medium text-white">{m.name} ({m.year})</div>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">{m.objective}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Glossary Terms */}
                  {searchResults.terms.length > 0 && (
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-violet-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Glossary Terms ({searchResults.terms.length})
                      </div>
                      <div className="space-y-1.5">
                        {searchResults.terms.map((t) => (
                          <Link
                            key={t.term}
                            to={`/glossary?term=${encodeURIComponent(t.term)}`}
                            onClick={() => setSearchModalOpen(false)}
                            className="block p-2.5 rounded-xl bg-white/5 hover:bg-violet-950/40 hover:border-violet-500/30 border border-transparent transition-all"
                          >
                            <div className="text-sm font-medium text-white">{t.term}</div>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">{t.definition}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="p-3 bg-black/40 border-t border-white/5 text-[11px] text-slate-500 flex justify-between font-mono">
              <span>Navigate with [↑][↓] • [ESC] to exit</span>
              <span>Event Horizon Universal Index</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
