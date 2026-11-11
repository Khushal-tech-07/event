import React from "react";
import { SEO } from "../components/common/SEO";
import { SITE_CONFIG } from "../config/appConfig";
import { 
  Telescope, Camera, Compass, Award, Sparkles, 
  MapPin, Heart, ArrowRight, BookOpen, Layers, Cpu 
} from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  const timelineEvents = [
    {
      year: "2014",
      title: "First Look Through a Dobsonian",
      description: "Gazed at Saturn's Cassini division from an 8-inch Dobsonian in the Mojave Desert, igniting a lifelong obsession with observational astrophysics.",
    },
    {
      year: "2018",
      title: "B.S. in Physics & Astrophysics",
      description: "Graduated with honors focusing on stellar nucleosynthesis, binary pulsars, and computational fluid dynamics.",
    },
    {
      year: "2021",
      title: "Ph.D. Research on Sgr A* Accretion",
      description: "Contributed to numerical relativistic hydrodynamic simulations analyzing polarization in Event Horizon Telescope data.",
    },
    {
      year: "2024",
      title: "Remote Astrophotography Observatory",
      description: "Commissioned a robotic 350mm CDK astrograph at an ultra-dark site in the Chilean Atacama Desert (Bortle 1).",
    },
    {
      year: "2026",
      title: "Founding EVENT HORIZON",
      description: "Launched this publication and interactive digital observatory to translate deep physics into accessible, cinematic experiences.",
    },
  ];

  const gearItems = [
    {
      category: "Primary Telescope",
      name: "PlaneWave CDK14 350mm f/7.2",
      details: "Corrected Dall-Kirkham astrograph delivering pinpoint stars across a 70mm image circle.",
    },
    {
      category: "Portable Wide-Field",
      name: "Takahashi FSQ-106ED Quadruplet",
      details: "Petzval optical design, 530mm focal length at f/5, legendary Japanese optical contrast.",
    },
    {
      category: "Deep Sky Camera",
      name: "QHY600M Pro Mono CMOS",
      details: "Full frame 61-megapixel Sony IMX455 sensor cooled to -20°C with ultra-low readout noise.",
    },
    {
      category: "Robotic Equatorial Mount",
      name: "10Micron GM2000 HPS II",
      details: "High-precision on-axis absolute encoders enabling 30-minute unguided sub-exposures.",
    },
    {
      category: "Filters & Spectroscopy",
      name: "Chroma 3nm Ultra-Narrowband (SHO)",
      details: "Interference bandpass filters for Hydrogen-Alpha, Oxygen-III, and Sulfur-II molecular imaging.",
    },
    {
      category: "Guiding & Control",
      name: "Pegasus Astro Ultimate Powerbox & N.I.N.A.",
      details: "Automated autofocus, target sequencing, weather telemetry, and roof park control.",
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="About Dr. Elena Vance - Mission & Observatory"
        description="Meet Dr. Elena Vance, astrophysicist and creator of Event Horizon. Explore the author's astronomy journey, telescope gear, and philosophy."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO INTRO & AUTHOR CARD */}
        <section className="p-8 sm:p-12 rounded-3xl glass-card-accent border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar & Badges */}
            <div className="md:col-span-5 space-y-4 text-center md:text-left">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto md:mx-0 rounded-3xl overflow-hidden border-2 border-[#ff8a3d]/60 shadow-[0_0_30px_rgba(255,138,61,0.3)]">
                <img
                  src={SITE_CONFIG.author.avatar}
                  alt={SITE_CONFIG.author.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-[#ff8a3d]/20 text-[#ff8a3d] border border-[#ff8a3d]/40 text-xs font-mono font-semibold">
                  Lead Author
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 text-xs font-mono">
                  Ph.D. Astrophysics
                </span>
              </div>
            </div>

            {/* Bio & Story */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest">
                AUTHOR & CURATOR
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                {SITE_CONFIG.author.name}
              </h1>

              <div className="text-sm font-mono text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#ff8a3d]" />
                <span>{SITE_CONFIG.author.location}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am an astrophysicist, night-sky photographer, and science communicator. 
                My research centers on numerical relativity, the accretion kinematics around Kerr black holes, 
                and high-energy relativistic plasma jets.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Too often, modern astrophysics is locked behind dense paywalled journals or watered down 
                into clickbait headlines. Event Horizon was born from a desire to bridge that divide: 
                celebrating the uncompromised beauty, mathematical rigor, and philosophical poetry of the cosmos.
              </p>
            </div>
          </div>
        </section>

        {/* "WHY I WRITE ABOUT SPACE" QUOTE BLOCK */}
        <section className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#ff8a3d]/40 text-center relative overflow-hidden space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#ff8a3d]/15 flex items-center justify-center text-[#ff8a3d] mx-auto">
            <Heart className="w-6 h-6" />
          </div>

          <blockquote className="font-subheading text-lg sm:text-xl text-slate-200 italic max-w-2xl mx-auto leading-relaxed">
            "When we look up at the night sky, we are not looking away from ourselves. 
            Every atom of iron coursing through your veins was forged in the thermonuclear furnace 
            of a dying giant star, and every atom of gold on your finger was fused in the violent collision 
            of two neutron stars. The cosmos is not out there—it is who we are."
          </blockquote>

          <span className="text-xs font-mono text-[#ff8a3d] block uppercase tracking-widest">
            — Dr. Elena Vance
          </span>
        </section>

        {/* TIMELINE OF ASTRONOMY JOURNEY */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-mono text-[#ff8a3d] uppercase tracking-widest">
              CHRONOLOGY
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              The Journey to the Event Horizon
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-700/80 pl-6 sm:pl-10 space-y-8 ml-4 sm:ml-8">
            {timelineEvents.map((ev, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-[#ff8a3d] group-hover:scale-125 transition-transform" />
                <div className="p-5 rounded-2xl glass-panel border border-slate-700/70 space-y-1">
                  <span className="text-xs font-mono font-bold text-[#ff8a3d]">{ev.year}</span>
                  <h3 className="font-heading text-base font-bold text-white">{ev.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EQUIPMENT & OBSERVATORY GEAR */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Telescope className="w-4 h-4 text-cyan-400" />
              <span>THE ARSENAL</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Telescopes & Imaging Hardware
            </h2>
            <p className="text-xs text-slate-400">
              The precision instruments used to collect the deep sky exposures featured across Event Horizon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gearItems.map((gear, i) => (
              <div key={i} className="p-5 rounded-2xl glass-panel border border-slate-700/80 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  {gear.category}
                </span>
                <h3 className="font-heading text-base font-bold text-white">{gear.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{gear.details}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
