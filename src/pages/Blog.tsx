import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { BLOG_POSTS } from "../data/posts";
import { 
  Search, BookOpen, Clock, Calendar, Filter, 
  ArrowRight, Sparkles, Tag, ChevronLeft, ChevronRight 
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Black Holes",
  "Galaxies",
  "Cosmology",
  "Missions",
  "Exoplanets",
  "Astrophysics",
] as const;

export const Blog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialTag = searchParams.get("tag") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedTag, setSelectedTag] = useState<string>(initialTag);
  const [sortBy, setSortBy] = useState<"newest" | "longest">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter & Sort
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesTag =
        selectedTag === "" || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    }).sort((a, b) => {
      if (sortBy === "longest") {
        return parseInt(b.readTime) - parseInt(a.readTime);
      }
      return 0; // default chronological in data
    });
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Cosmic Chronicles - Astronomy Blog & Essays"
        description="Delve into deep-dive astrophysics essays, black hole thermodynamics, gravitational waves, and space exploration chronicles."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HERO TITLE */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a3d]/15 border border-[#ff8a3d]/30 text-xs font-mono text-[#ff8a3d]">
            <BookOpen className="w-4 h-4 text-[#ff8a3d]" />
            <span>ASTROPHYSICS JOURNAL & ESSAYS</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Cosmic <span className="text-[#ff8a3d] accretion-glow">Chronicles</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Rigorous, accessible essays and dispatches from the bleeding edges of theoretical cosmology, 
            planetary science, and observational astronomy.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-700/80 shadow-xl space-y-5">
          {/* Top Bar: Search + Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles, topics, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs font-mono text-slate-400">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "longest")}
                className="px-3 py-2 rounded-xl bg-black/60 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#ff8a3d]"
              >
                <option value="newest">Chronological (Newest)</option>
                <option value="longest">In-Depth (Read Time)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all border whitespace-nowrap ${
                    isSelected
                      ? "bg-[#ff8a3d] text-slate-950 border-[#ff8a3d] font-bold shadow-[0_0_12px_rgba(255,138,61,0.3)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Tag Filter row */}
          {selectedTag && (
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Filtered by Tag:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#ff8a3d]/20 text-[#ff8a3d] border border-[#ff8a3d]/40 flex items-center gap-1">
                <Tag className="w-3 h-3" /> {selectedTag}
                <button
                  onClick={() => setSelectedTag("")}
                  className="ml-1 text-slate-300 hover:text-white"
                >
                  ×
                </button>
              </span>
            </div>
          )}
        </div>

        {/* POSTS GRID */}
        {displayedPosts.length === 0 ? (
          <div className="p-12 text-center glass-panel rounded-2xl space-y-3">
            <p className="text-slate-400 text-base">No cosmic dispatches found matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedTag("");
              }}
              className="px-4 py-2 rounded-xl bg-[#ff8a3d] text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl glass-panel glass-panel-hover overflow-hidden border border-slate-700/80"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-[#ff8a3d]">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#ff8a3d] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedTag(tag);
                          }}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400">{post.author.name}</span>
                      <span className="text-[#ff8a3d] font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-xl text-xs font-mono transition-colors border ${
                  currentPage === page
                    ? "bg-[#ff8a3d] text-slate-950 border-[#ff8a3d] font-bold"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
