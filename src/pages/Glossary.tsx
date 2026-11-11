import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { GLOSSARY_TERMS } from "../data/glossary";
import { GlossaryTerm } from "../types";
import { Search, Sparkles, BookA, Tag, ArrowRight } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const Glossary: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("term") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const term = searchParams.get("term");
    if (term) setSearchQuery(term);
  }, [searchParams]);

  const categories = ["All", "Cosmology", "Relativity", "Mechanics", "Observational", "Planetary"];

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      const matchSearch =
        searchQuery === "" ||
        t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCat =
        selectedCategory === "All" || t.category === selectedCategory;

      return matchSearch && matchCat;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((item) => {
      const firstChar = item.term.charAt(0).toUpperCase();
      if (!groups[firstChar]) groups[firstChar] = [];
      groups[firstChar].push(item);
    });
    return groups;
  }, [filteredTerms]);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-group-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Cosmic Glossary - A-Z Astronomy & Relativity Terms"
        description="Comprehensive encyclopedia of over 40 astronomical, general relativistic, and cosmological terms with definitions and cross-references."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HERO TITLE */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/40 text-xs font-mono text-violet-300">
            <BookA className="w-4 h-4 text-violet-400" />
            <span>ASTRONOMICAL LEXICON</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            A-Z Cosmic <span className="text-violet-400 violet-glow">Glossary</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Essential terminology spanning theoretical spacetime physics, quantum cosmology, 
            telescope optics, and planetary mechanics.
          </p>
        </section>

        {/* SEARCH & CONTROLS */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-700/80 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search definitions or concepts..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono transition-all border whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-violet-500 text-slate-950 border-violet-400 font-bold"
                      : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Letter Jump Navigation Bar */}
          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-center gap-1">
            {ALPHABET.map((char) => {
              const hasTerms = !!groupedTerms[char];
              return (
                <button
                  key={char}
                  onClick={() => hasTerms && scrollToLetter(char)}
                  disabled={!hasTerms}
                  className={`w-7 h-7 rounded-lg text-xs font-mono transition-colors ${
                    hasTerms
                      ? "bg-white/5 hover:bg-violet-500 hover:text-slate-950 text-white border border-white/10"
                      : "text-slate-600 cursor-not-allowed opacity-30"
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>
        </div>

        {/* GLOSSARY LIST */}
        <div className="space-y-10">
          {Object.keys(groupedTerms).length === 0 ? (
            <div className="p-12 text-center glass-panel rounded-2xl space-y-2">
              <p className="text-slate-400">No definitions found for "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-xl bg-violet-500 text-slate-950 font-bold text-xs"
              >
                Clear Search
              </button>
            </div>
          ) : (
            Object.keys(groupedTerms).map((letter) => (
              <div key={letter} id={`letter-group-${letter}`} className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-violet-950/80 border border-violet-500/40 text-violet-300 font-heading font-bold text-lg flex items-center justify-center">
                    {letter}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedTerms[letter].map((term) => (
                    <div
                      key={term.term}
                      className="p-5 rounded-2xl glass-panel border border-slate-700/80 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading text-base font-bold text-white">
                            {term.term}
                          </h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-violet-300 border border-violet-500/20">
                            {term.category}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {term.definition}
                        </p>
                      </div>

                      {/* Related Terms (Clickable Jump) */}
                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                          <span className="text-slate-500">Related:</span>
                          {term.relatedTerms.map((rel) => (
                            <button
                              key={rel}
                              onClick={() => setSearchQuery(rel)}
                              className="px-2 py-0.5 rounded bg-white/5 hover:bg-violet-950 hover:text-violet-300 text-slate-400 transition-colors"
                            >
                              {rel}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
