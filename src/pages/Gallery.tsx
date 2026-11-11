import React, { useState, useEffect } from "react";
import { SEO } from "../components/common/SEO";
import { GALLERY_ITEMS } from "../data/gallery";
import { GalleryItem } from "../types";
import { 
  Telescope, Camera, MapPin, Clock, X, 
  ChevronLeft, ChevronRight, Sparkles, Filter 
} from "lucide-react";

const CATEGORIES = ["All", "Deep Sky", "Solar System", "Nightscape", "Black Hole Simulations"] as const;

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const activePhoto: GalleryItem | null =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Astrophotography Gallery - Deep Sky & Nightscapes"
        description="High-resolution astrophotography portfolio showcasing nebulae, planetary details, and relativistic simulations with full exposure telemetry."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HERO TITLE */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-400">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span>PHOTON COLLECTING AT THE SENSOR</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Astrophotography <span className="text-cyan-400 cyan-glow">Vault</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Images captured through chilled monochrome sensors, cryogenic mountain telescopes, 
            and general relativistic ray-tracing engines.
          </p>

          {/* Filter Chips */}
          <div className="flex items-center justify-center gap-2 pt-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all border whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_12px_rgba(79,209,255,0.3)]"
                    : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-slate-700/80 cursor-pointer shadow-xl"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-[#090b16]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  {photo.category}
                </span>
                <h3 className="font-heading text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {photo.exposure}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActivePhotoIndex(null)}
            />

            {/* Navigation buttons */}
            <button
              onClick={() =>
                setActivePhotoIndex((prev) =>
                  prev !== null
                    ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
                    : null
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                setActivePhotoIndex((prev) =>
                  prev !== null ? (prev + 1) % filteredPhotos.length : null
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div className="relative w-full max-w-4xl bg-[#090b18] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="relative h-72 sm:h-96 md:h-[460px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Photo Details Footer */}
              <div className="p-6 space-y-3 bg-[#060710] border-t border-white/10 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">
                    {activePhoto.category} • {activePhoto.date}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Use [←][→] or ESC
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {activePhoto.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activePhoto.description}
                </p>

                {/* Technical Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block flex items-center gap-1">
                      <Camera className="w-3 h-3" /> Camera
                    </span>
                    <span className="text-white truncate block">{activePhoto.camera}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block flex items-center gap-1">
                      <Telescope className="w-3 h-3" /> Optics
                    </span>
                    <span className="text-white truncate block">{activePhoto.telescope}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Integration
                    </span>
                    <span className="text-cyan-400 truncate block">{activePhoto.exposure}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-500 block flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Location
                    </span>
                    <span className="text-white truncate block">{activePhoto.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
