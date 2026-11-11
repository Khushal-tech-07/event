import { BlackHoleType, FamousBlackHole } from "../types";

export interface JourneyStage {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  scientificDetails: string[];
  equation?: string;
  visualEffect: "nebula" | "collapse" | "horizon" | "disk" | "tidal" | "singularity" | "hawking";
  color: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "stellar-birth",
    number: 1,
    title: "Stellar Birth & Fusion",
    subtitle: "The Equilibrium of Fire and Gravity",
    description: "A supermassive star (>20 Solar Masses) spends millions of years in hydrostatic equilibrium, where radiation pressure from hydrogen and helium nuclear fusion perfectly balances the crushing inward pull of gravity.",
    scientificDetails: [
      "Nuclear core temperature: > 40,000,000 Kelvin",
      "Fusion progression: Hydrogen → Helium → Carbon → Neon → Oxygen → Silicon",
      "Silicon burning finishes in merely 24 to 48 hours, creating an inert Iron-56 core."
    ],
    equation: "E = mc² (Nuclear Binding Energy Curve)",
    visualEffect: "nebula",
    color: "#ff8a3d",
  },
  {
    id: "core-collapse",
    number: 2,
    title: "Core Collapse & Supernova",
    subtitle: "The Iron Catastrophe & Inward Implosion",
    description: "Iron fusion consumes energy rather than releasing it. In less than 0.25 seconds, the radiation engine stalls. With no outward pressure, the stellar core collapses inward at nearly a quarter the speed of light.",
    scientificDetails: [
      "Collapse velocity: ~ 70,000 km/s",
      "Electron degeneracy pressure is overcome when core mass exceeds the Chandrasekhar limit (~1.44 M☉)",
      "Protons and electrons merge via inverse beta decay, releasing an immense burst of neutrinos."
    ],
    equation: "p + e⁻ → n + νₑ",
    visualEffect: "collapse",
    color: "#ff4b4b",
  },
  {
    id: "event-horizon",
    number: 3,
    title: "The Event Horizon",
    subtitle: "The Null Hypersurface of No Return",
    description: "The core collapses within its own Schwarzschild radius. Spacetime curves so severely that all future-directed light cones tilt inward toward the center. Escape velocity equals the speed of light in vacuum.",
    scientificDetails: [
      "Non-rotating Schwarzschild metric: ds² = -(1 - 2GM/rc²)c²dt² + (1 - 2GM/rc²)⁻¹dr² + r²dΩ²",
      "Photon sphere forms at 1.5 times the Schwarzschild radius (r = 3GM/c²)",
      "Photons can orbit in unstable circular paths before falling in or escaping."
    ],
    equation: "R_s = \\frac{2GM}{c^2}",
    visualEffect: "horizon",
    color: "#7c5cff",
  },
  {
    id: "accretion-disk",
    number: 4,
    title: "The Accretion Disk",
    subtitle: "Superheated Plasma & Relativistic Beaming",
    description: "Infalling gas and matter forms a swirling disk due to conservation of angular momentum. Viscous friction converts gravitational potential energy into blinding thermal radiation, heating plasma to millions of degrees.",
    scientificDetails: [
      "Radiative efficiency: Up to 42% for a maximally spinning Kerr black hole (compared to 0.7% for nuclear fusion)",
      "Doppler boosting brightens the side of the disk rotating toward the observer",
      "Intense magnetic field lines twist along the spin axis, launching relativistic particle jets."
    ],
    equation: "\\eta_{max} \\approx 42\\% \\text{ (Kerr metric)}",
    visualEffect: "disk",
    color: "#ffaa00",
  },
  {
    id: "spaghettification",
    number: 5,
    title: "Spaghettification",
    subtitle: "Extreme Tidal Geodesic Deviation",
    description: "As an object falls into the gravitational well, the differential gravity between its nearest and farthest extremities creates catastrophic tensile stretching along the radial axis and lateral compression.",
    scientificDetails: [
      "Tidal acceleration: a_t \\propto 2GM\\Delta r / r³",
      "For stellar black holes, human bodies are torn apart thousands of kilometers before the horizon",
      "For supermassive black holes, tidal force at the horizon is negligible, allowing crossing intact."
    ],
    equation: "\\Delta g = \\frac{2GM}{r^3} \\Delta r",
    visualEffect: "tidal",
    color: "#ff66cc",
  },
  {
    id: "singularity",
    number: 6,
    title: "The Central Singularity",
    subtitle: "Zero Volume, Infinite Density",
    description: "At the geometric core, classical general relativity breaks down completely. The curvature of spacetime and matter density diverge to infinity. In a Kerr (spinning) black hole, this takes the form of a ring singularity.",
    scientificDetails: [
      "Kerr ring singularity allows theoretical inner Cauchy horizons",
      "Requires quantum gravity (String Theory, Loop Quantum Gravity) to resolve the infinitesimal scale",
      "Cosmic Censorship Hypothesis posits that singularities are always cloaked by event horizons."
    ],
    equation: "R_{\\mu\\nu\\rho\\sigma} R^{\\mu\\nu\\rho\\sigma} \\rightarrow \\infty",
    visualEffect: "singularity",
    color: "#4fd1ff",
  },
  {
    id: "hawking-radiation",
    number: 7,
    title: "Hawking Radiation & Evaporation",
    subtitle: "The Quantum Whisper into Eternity",
    description: "Quantum vacuum fluctuations near the horizon separate entangled virtual particle pairs. One member falls inward with negative energy while the other escapes with positive energy, causing the black hole to slowly lose mass.",
    scientificDetails: [
      "Hawking temperature is inversely proportional to mass: T_H = \\hbar c³ / (8\\pi G M k_B)",
      "Smaller black holes are hotter and evaporate far more violently",
      "A 1-solar-mass black hole has a temperature of 60 nanokelvin and lasts 2.1 × 10⁶⁷ years."
    ],
    equation: "T_H = \\frac{\\hbar c^3}{8 \\pi G M k_B}",
    visualEffect: "hawking",
    color: "#a855f7",
  },
];

export const BLACK_HOLE_TYPES: BlackHoleType[] = [
  {
    id: "stellar",
    name: "Stellar-Mass Black Holes",
    massRange: "3 to ~100 Solar Masses (M☉)",
    physicalSize: "18 km to 600 km diameter",
    formation: "Gravitational core collapse of massive stars (Type II/Ib/Ic supernovae)",
    knownExamples: ["Cygnus X-1", "V404 Cygni", "GW150914 merger remnants", "Gaia BH1"],
    density: "~ 10¹⁴ g/cm³ (comparable to atomic nucleus)",
    description: "The most common black holes in the modern universe. When a star with initial mass over 20 M☉ exhausts its nuclear fuel, its remnant core collapses unimpeded. Tens of millions likely pepper the Milky Way.",
  },
  {
    id: "intermediate",
    name: "Intermediate-Mass Black Holes (IMBH)",
    massRange: "100 to 100,000 Solar Masses (M☉)",
    physicalSize: "600 km to Earth-size (~100,000 km)",
    formation: "Runaway stellar collisions in dense globular clusters or early direct collapse",
    knownExamples: ["HLX-1", "GW190521 remnant (142 M☉)", "Omega Centauri central candidate"],
    density: "Varies from water density down to vacuum-like averages",
    description: "The elusive 'missing link' of black hole evolution. IMBHs are thought to serve as building blocks that merged to produce supermassive giants in the early universe.",
  },
  {
    id: "supermassive",
    name: "Supermassive Black Holes (SMBH)",
    massRange: "100,000 to Billions of Solar Masses (M☉)",
    physicalSize: "Solar System scale (Millions to Billions of km)",
    formation: "Direct collapse of primordial gas clouds in the early universe, followed by continuous accretion and mergers",
    knownExamples: ["Sagittarius A* (4.3M M☉)", "M87* (6.5B M☉)", "TON 618 (66B M☉)", "Centaurus A"],
    density: "Can be less dense than water or air across their horizon volume",
    description: "Lurking at the gravitational centers of almost all large galaxies. Their immense gravity governs galactic dynamics and active galactic nuclei (AGN), firing jets millions of light-years across.",
  },
  {
    id: "primordial",
    name: "Primordial Black Holes (PBH)",
    massRange: "Hypothetical: 10⁻⁸ kg (Planck mass) to thousands of M☉",
    physicalSize: "Subatomic particle scale up to planetary sizes",
    formation: "High-density fluctuations in the immediate post-Big Bang radiation era (10⁻²³ seconds)",
    knownExamples: ["Hypothetical candidates probed by gravitational microlensing"],
    density: "Extreme (Planck-scale at birth)",
    description: "Formed not from stars, but directly from dense quantum fluctuations during the first second of the cosmos. If they exist in sufficient numbers, they could account for a fraction of cold dark matter.",
  },
];

export const FAMOUS_BLACK_HOLES: FamousBlackHole[] = [
  {
    id: "sagittarius-a",
    name: "Sagittarius A* (Sgr A*)",
    constellation: "Sagittarius (Galactic Center)",
    distanceLightYears: "26,673 light-years",
    massSolarMasses: "4.297 ± 0.012 Million M☉",
    schwarzschildRadiusKm: "12.7 Million km (~0.085 AU)",
    discoveryYear: 1974,
    significance: "The supermassive black hole at the center of our Milky Way galaxy. Directly imaged by the Event Horizon Telescope in 2022.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1200&q=80",
    spectralType: "Quiescent Supermassive / Sgr A Complex",
  },
  {
    id: "m87-star",
    name: "M87* (Messier 87)",
    constellation: "Virgo",
    distanceLightYears: "53.5 Million light-years",
    massSolarMasses: "6.5 ± 0.7 Billion M☉",
    schwarzschildRadiusKm: "19.2 Billion km (~128 AU, larger than Pluto's orbit)",
    discoveryYear: 1781,
    significance: "The first black hole ever directly imaged in human history (EHT, April 2019). Anchors a giant elliptical galaxy and shoots a 5,000 light-year relativistic jet.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    spectralType: "Active Supermassive / Fanaroff-Riley Class I",
  },
  {
    id: "cygnus-x1",
    name: "Cygnus X-1",
    constellation: "Cygnus (The Swan)",
    distanceLightYears: "7,300 light-years",
    massSolarMasses: "21.2 ± 2.2 M☉",
    schwarzschildRadiusKm: "62.6 km",
    discoveryYear: 1964,
    significance: "The first widely accepted stellar-mass black hole candidate discovered. In an intense X-ray binary orbit with the blue supergiant star HDE 226868.",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    spectralType: "High-Mass X-ray Binary (HMXB)",
  },
  {
    id: "ton-618",
    name: "TON 618",
    constellation: "Canes Venatici",
    distanceLightYears: "10.8 Billion light-years (z = 2.219)",
    massSolarMasses: "66 Billion M☉",
    schwarzschildRadiusKm: "195 Billion km (~1,300 AU, over 30 times Neptune's orbit)",
    discoveryYear: 1957,
    significance: "One of the most massive known black holes and hyperluminous quasars in the observable universe. Shines with the brilliance of 140 trillion suns.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    spectralType: "Broad Absorption Line Quasar (BALQSO)",
  },
];

export const BLACK_HOLE_FAQS = [
  {
    q: "Can a black hole suck up the entire universe?",
    a: "No. A black hole's gravitational attraction outside its event horizon obeys standard Newtonian and relativistic orbital mechanics. If the Sun were replaced by a black hole of identical mass (1 solar mass), Earth's orbit would not change at all—it would remain at 1 AU, taking 365.25 days to orbit, though Earth would become frozen without sunlight.",
  },
  {
    q: "What actually happens to time near a black hole?",
    a: "Due to gravitational time dilation predicted by Einstein's General Relativity, time flows slower in stronger gravitational potentials. To a distant observer, an astronaut falling toward an event horizon appears to slow down continuously, their image dimming and reddening indefinitely without ever quite reaching the horizon. To the falling astronaut, however, their own watch ticks completely normally, and they cross the horizon in a finite proper time.",
  },
  {
    q: "Is an event horizon an actual physical wall or boundary?",
    a: "No. The event horizon is a coordinate boundary in spacetime, not a material object. You would feel no physical surface impact as you pass it. However, the tidal gravity and space-time curvature may physically strain or tear matter apart depending on the mass.",
  },
  {
    q: "How does the Schwarzschild radius calculator work?",
    a: "The Schwarzschild radius formula is R_s = 2GM / c², where G is Newton's gravitational constant (6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²), M is the mass, and c is the speed of light (299,792,458 m/s). For each solar mass (1.989 × 10³⁰ kg), the radius increases by approximately 2.953 kilometers.",
  },
  {
    q: "What is Hawking radiation and how does a black hole die?",
    a: "Proposed by Stephen Hawking in 1974, quantum field theory in curved spacetime demonstrates that virtual particle pairs near the horizon can be separated. The escaping particles appear as blackbody thermal radiation. As radiation carries energy and mass away, the black hole slowly shrinks and ultimately evaporates in a burst of gamma rays.",
  },
];
