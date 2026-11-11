import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Track scroll position for progress bar and button
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#ff8a3d] via-[#ffaa00] to-[#7c5cff] transition-all duration-100 shadow-[0_0_8px_rgba(255,138,61,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 z-40 p-2.5 rounded-full bg-[#0b0e1b]/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#ff8a3d]/50 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          title="Return to top"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-4 h-4 text-slate-300 group-hover:text-[#ff8a3d] transition-colors" />
        </button>
      )}
    </>
  );
};
