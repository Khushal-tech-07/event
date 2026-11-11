import { LearningPath, QuizQuestion } from "../types";

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "astronomy-101",
    title: "Astronomy 101: The Cosmic Architecture",
    level: "Beginner",
    duration: "4 Modules • 45 min",
    iconName: "Compass",
    description: "Build a solid intuitive and mathematical foundation in celestial coordinates, stellar life cycles, and the cosmic distance ladder.",
    modules: [
      {
        id: "mod-1-1",
        title: "Celestial Coordinates & Night Sky Mechanics",
        readTime: "10 min",
        summary: "Understand Right Ascension, Declination, the ecliptic, precession of the equinoxes, and how to navigate the night sky.",
        keyPoints: [
          "Right Ascension is measured eastward along the celestial equator in hours, minutes, and seconds (0 to 24h).",
          "Declination is measured in degrees north (+) or south (-) of the celestial equator (-90° to +90°).",
          "Earth's 23.5-degree axial tilt creates our seasons and the sinusoidal path of the Sun across the celestial sphere.",
        ],
      },
      {
        id: "mod-1-2",
        title: "The Stellar Life Cycle: From Nebulae to Remnants",
        readTime: "12 min",
        summary: "Trace how mass dictates the ultimate destiny of a star—from red dwarfs burning for trillions of years to supernovae producing neutron stars.",
        keyPoints: [
          "Stars spend ~90% of their lifespans on the main sequence fusing hydrogen into helium via the p-p chain or CNO cycle.",
          "Low to intermediate mass stars (<8 M☉) shed their outer envelopes into planetary nebulae, leaving degenerate white dwarfs.",
          "Massive stars (>8 M☉) undergo iron core-collapse supernovae, leaving neutron stars or black holes.",
        ],
      },
      {
        id: "mod-1-3",
        title: "The Cosmic Distance Ladder",
        readTime: "11 min",
        summary: "How astronomers measure distance across the cosmos—from geometric parallax to Cepheid variables and Type Ia standard candles.",
        keyPoints: [
          "Trigonometric parallax provides direct geometric distance out to a few thousand parsecs (pioneered by ESA's Gaia).",
          "Henrietta Leavitt's period-luminosity relation for Cepheid variable stars enables distance measurements across nearby galaxies.",
          "Type Ia supernovae serve as cosmological standard candles because they detonate at the uniform Chandrasekhar mass limit.",
        ],
      },
      {
        id: "mod-1-4",
        title: "Electromagnetic Spectrum & Observational Windows",
        readTime: "12 min",
        summary: "Explore how multi-wavelength astronomy—radio, infrared, optical, UV, X-ray, and gamma-ray—reveals distinct physical processes.",
        keyPoints: [
          "Cold interstellar dust shines brightly in sub-millimeter and far-infrared wavelengths.",
          "Relativistic accretion disks and neutron star magnetospheres produce blistering X-rays and gamma-ray bursts.",
          "Earth's atmosphere absorbs most UV, X-ray, and IR radiation, necessitating space-based orbital observatories.",
        ],
      },
    ],
  },
  {
    id: "black-hole-physics",
    title: "Black Hole Physics: The Relativistic Frontier",
    level: "Intermediate",
    duration: "4 Modules • 60 min",
    iconName: "CircleDot",
    description: "Dive deep into the mathematics and concepts of General Relativity, Kerr metrics, photon orbits, frame-dragging, and quantum thermodynamics.",
    modules: [
      {
        id: "mod-2-1",
        title: "The Schwarzschild Metric & Spacetime Curvature",
        readTime: "15 min",
        summary: "Derive the geometry surrounding a static, spherically symmetric mass and understand the coordinate singularity at r = 2GM/c².",
        keyPoints: [
          "The Schwarzschild radius R_s = 2GM/c² is a coordinate singularity in standard coordinates, removable in Eddington-Finkelstein coordinates.",
          "The photon sphere at r = 1.5 R_s represents the closest boundary where light can momentarily orbit before inevitably deflecting.",
          "Proper radial distance stretches toward infinity as r approaches the horizon from the perspective of an external stationary observer.",
        ],
      },
      {
        id: "mod-2-2",
        title: "Rotating Kerr Black Holes & Frame Dragging",
        readTime: "16 min",
        summary: "Explore the Lense-Thirring effect, the ergosphere, and how rotational energy can be extracted via the Penrose process.",
        keyPoints: [
          "Real astrophysical black holes possess angular momentum, described by the Kerr metric.",
          "The ergosphere is an ellipsoidal region outside the event horizon where spacetime rotates faster than light, forcing all matter to co-rotate.",
          "The Penrose process allows extracting up to 29% of a black hole's total mass-energy through infalling particle decay in the ergosphere.",
        ],
      },
      {
        id: "mod-2-3",
        title: "Accretion Disk Magnetohydrodynamics",
        readTime: "14 min",
        summary: "Understand how magnetorotational instability (MRI) creates viscosity, superheating infalling plasma to millions of degrees.",
        keyPoints: [
          "Molecular viscosity is far too weak; magnetic turbulence via MRI provides the effective torque to transfer angular momentum outward.",
          "Radiative efficiency in thin Shakura-Sunyaev disks reaches 5.7% for Schwarzschild and up to 42.3% for maximal prograde Kerr holes.",
          "Twisted helical magnetic field lines collimate relativistic plasma jets outward at nearly the speed of light along the spin axis.",
        ],
      },
      {
        id: "mod-2-4",
        title: "The Black Hole Information Paradox & Holography",
        readTime: "15 min",
        summary: "Analyze the profound clash between quantum unitarity and Hawking evaporation, leading to the holographic principle and AdS/CFT.",
        keyPoints: [
          "Hawking radiation is thermal, carrying no trace of the initial quantum state that formed the black hole, violating unitary evolution.",
          "Bekenstein-Hawking entropy is proportional to the event horizon's surface area (S = k c³ A / 4 G ℏ), not its three-dimensional volume.",
          "The Holographic Principle suggests that all physics within a volume can be fully encoded on its lower-dimensional boundary.",
        ],
      },
    ],
  },
  {
    id: "stargazer-guide",
    title: "Observational Astronomy & Stargazing Mastery",
    level: "Advanced",
    duration: "3 Modules • 40 min",
    iconName: "Eye",
    description: "Master telescope optics, collimation, atmospheric seeing, narrow-band astrophotography filters, and deep-sky observation targets.",
    modules: [
      {
        id: "mod-3-1",
        title: "Telescope Optical Systems: Refractors, Newtonians, and SCTs",
        readTime: "12 min",
        summary: "Compare chromatic aberration in apochromatic triplets with coma in fast parabolic mirrors and focal lengths in Schmidt-Cassegrains.",
        keyPoints: [
          "Apochromatic refractors use ED/fluorite glass elements to bring three wavelengths of light to a common focus, providing unmatched contrast.",
          "Newtonian reflectors offer the highest aperture per dollar, ideal for visual deep-sky observing on Dobsonian mounts.",
          "Schmidt-Cassegrain (SCT) designs fold long focal lengths into compact tubes, favored for high-resolution planetary imaging.",
        ],
      },
      {
        id: "mod-3-2",
        title: "Atmospheric Seeing & The Bortle Dark-Sky Scale",
        readTime: "13 min",
        summary: "Learn how thermal turbulence in the troposphere degrades resolution (FWHM) and how to evaluate dark-sky sites.",
        keyPoints: [
          "Astronomical seeing is measured by the Full Width at Half Maximum (FWHM) of a stellar point source in arcseconds.",
          "The Bortle Scale classifies night sky brightness from Class 1 (pristine natural dark sky) to Class 9 (inner-city sky).",
          "Lucky imaging overcomes seeing for planetary photography by selecting and stacking only the top 10% sharpest video frames.",
        ],
      },
      {
        id: "mod-3-3",
        title: "Narrowband Emission Imaging: Ha, OIII, and SII",
        readTime: "15 min",
        summary: "Capture nebulae even under city light pollution using ultra-narrow 3nm optical interference filters in the Hubble Palette (SHO).",
        keyPoints: [
          "Hydrogen-Alpha (656.3nm) highlights energized ionized hydrogen gas clouds pervasive throughout star-forming regions.",
          "Oxygen-III (500.7nm) reveals high-energy stellar shockwaves and planetary nebulae envelopes with an ethereal turquoise hue.",
          "The Hubble Palette maps Sulfur-II to Red, Hydrogen-Alpha to Green, and Oxygen-III to Blue (SHO) to reveal structural chemistry.",
        ],
      },
    ],
  },
];

export const COSMIC_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: "Relativity",
    question: "What is the Schwarzschild radius of our Sun if it were compressed into a black hole?",
    options: ["Approximately 3 kilometers", "Approximately 300 meters", "Approximately 64 kilometers", "Approximately 1,500 kilometers"],
    correctIndex: 0,
    explanation: "Using R_s = 2GM / c², substituting the Sun's mass (1.989 × 10³⁰ kg), G, and c gives approximately 2.95 kilometers (roughly 3 km).",
  },
  {
    id: 2,
    category: "Galaxies",
    question: "What is the name of the supermassive black hole at the center of the Milky Way?",
    options: ["Cygnus X-1", "Sagittarius A*", "Andromeda Core-1", "Messier 87*"],
    correctIndex: 1,
    explanation: "Sagittarius A* (Sgr A*) is the supermassive black hole anchoring the center of our Milky Way, weighing roughly 4.3 million solar masses.",
  },
  {
    id: 3,
    category: "Cosmology",
    question: "What percentage of the universe's total energy-matter budget is estimated to be Dark Energy?",
    options: ["About 5%", "About 27%", "About 68%", "About 95%"],
    correctIndex: 2,
    explanation: "According to Planck and WMAP precision measurements, the universe comprises ~68% Dark Energy, ~27% Dark Matter, and only ~5% ordinary baryonic matter.",
  },
  {
    id: 4,
    category: "Black Holes",
    question: "At what radius does the photon sphere exist around a static (Schwarzschild) black hole?",
    options: ["1.0 R_s (at the event horizon)", "1.5 R_s (3GM / c²)", "2.0 R_s (4GM / c²)", "3.0 R_s (6GM / c²)"],
    correctIndex: 1,
    explanation: "The photon sphere—the unstable circular orbit for photons—is located at r = 1.5 times the Schwarzschild radius (r = 3GM/c²).",
  },
  {
    id: 5,
    category: "Solar System",
    question: "Which planet in our solar system has the highest surface atmospheric pressure?",
    options: ["Jupiter", "Venus", "Neptune", "Mars"],
    correctIndex: 1,
    explanation: "Venus has a surface atmospheric pressure of ~92 atmospheres (equivalent to the pressure 900 meters deep in Earth's oceans), comprised primarily of carbon dioxide.",
  },
  {
    id: 6,
    category: "Astrobiology",
    question: "Why does Jupiter's moon Europa maintain a liquid ocean despite being located in the freezing outer solar system?",
    options: [
      "Solar radiation absorption through transparent ice",
      "Tidal heating caused by orbital resonance gravitational flexing",
      "Decay of antimatter in its iron core",
      "Continuous volcanic magma oceans on its surface"
    ],
    correctIndex: 1,
    explanation: "Gravitational tidal forces from Jupiter, Io, and Ganymede continuously flex Europa's mantle, dissipating heat and keeping its vast subsurface ocean liquid.",
  },
  {
    id: 7,
    category: "Missions",
    question: "Which space observatory is stationed at the Sun-Earth L2 Lagrange Point with a 6.5-meter gold-coated beryllium mirror?",
    options: ["Hubble Space Telescope", "Chandra X-ray Observatory", "James Webb Space Telescope (JWST)", "Spitzer Space Telescope"],
    correctIndex: 2,
    explanation: "The James Webb Space Telescope (JWST) was launched in December 2021 and operates 1.5 million kilometers away at the Sun-Earth L2 point.",
  },
  {
    id: 8,
    category: "Black Holes",
    question: "What theoretical temperature effect does Hawking Radiation predict for black holes?",
    options: [
      "Larger black holes are much hotter than small black holes",
      "Smaller black holes have higher temperatures and evaporate faster",
      "All black holes have the exact same temperature of absolute zero",
      "Hawking temperature is directly proportional to mass squared"
    ],
    correctIndex: 1,
    explanation: "Hawking temperature is inversely proportional to mass (T_H ∝ 1/M). Smaller black holes are hotter, radiate more vigorously, and evaporate rapidly.",
  },
  {
    id: 9,
    category: "Astrophysics",
    question: "What is the Chandrasekhar limit, the maximum mass of a stable white dwarf supported by electron degeneracy pressure?",
    options: ["Approximately 0.5 Solar Masses", "Approximately 1.44 Solar Masses", "Approximately 3.0 Solar Masses", "Approximately 10 Solar Masses"],
    correctIndex: 1,
    explanation: "Subrahmanyan Chandrasekhar calculated that electron degeneracy pressure cannot support a white dwarf exceeding ~1.44 solar masses without collapsing into a neutron star or black hole.",
  },
  {
    id: 10,
    category: "Observational",
    question: "In narrowband astrophotography, what does the classic 'Hubble Palette' (SHO) map to RGB channels?",
    options: [
      "Sulfur-II to Red, Hydrogen-Alpha to Green, Oxygen-III to Blue",
      "Hydrogen-Alpha to Red, Sulfur-II to Green, Oxygen-III to Blue",
      "Oxygen-III to Red, Hydrogen-Alpha to Green, Sulfur-II to Blue",
      "Blue to Red, Green to Green, Red to Blue"
    ],
    correctIndex: 0,
    explanation: "The SHO Hubble Palette maps Sulfur-II (SII) to the Red channel, Hydrogen-Alpha (Ha) to Green, and Oxygen-III (OIII) to Blue, distinguishing chemical layers.",
  },
];
