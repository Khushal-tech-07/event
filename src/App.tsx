/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { GlobalBackground } from "./components/common/GlobalBackground";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { IntroLoader } from "./components/common/IntroLoader";

// Pages
import { Home } from "./pages/Home";
import { BlackHoles } from "./pages/BlackHoles";
import { UniverseExplorer } from "./pages/UniverseExplorer";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Missions } from "./pages/Missions";
import { Gallery } from "./pages/Gallery";
import { Academy } from "./pages/Academy";
import { Tools } from "./pages/Tools";
import { Glossary } from "./pages/Glossary";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <div className="relative min-h-screen flex flex-col bg-[#030308] text-slate-100 overflow-x-hidden">
        {/* Intro animated black hole loader (only shown on first visit in session) */}
        <IntroLoader />

        {/* Global fixed full-screen background (Video with 3D Three.js fallback & accessibility controls) */}
        <GlobalBackground />

        {/* Reading progress bar and scroll-to-top controller */}
        <ScrollToTop />

        {/* Sticky glassmorphism navigation header with universal search */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-1 z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/black-holes" element={<BlackHoles />} />
            <Route path="/explorer" element={<UniverseExplorer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global footer with about blurb, quick links, social icons, and newsletter */}
        <Footer />
      </div>
    </HashRouter>
  );
}
