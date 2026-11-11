export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Black Holes" | "Galaxies" | "Cosmology" | "Missions" | "Exoplanets" | "Astrophysics";
  tags: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  imageCaption?: string;
  excerpt: string;
  content: string; // rich markdown-like HTML structure
  featured?: boolean;
}

export interface BlackHoleType {
  id: string;
  name: string;
  massRange: string;
  physicalSize: string;
  formation: string;
  knownExamples: string[];
  description: string;
  density: string;
}

export interface FamousBlackHole {
  id: string;
  name: string;
  constellation: string;
  distanceLightYears: string;
  massSolarMasses: string;
  schwarzschildRadiusKm: string;
  discoveryYear: number;
  significance: string;
  image: string;
  spectralType: string;
}

export interface SpaceMission {
  id: string;
  name: string;
  agency: "NASA" | "ESA" | "ISRO" | "JAXA" | "SpaceX" | "Roscosmos" | "CNSA";
  year: number;
  status: "Past" | "Active" | "Upcoming";
  target: string;
  objective: string;
  highlights: string[];
  image: string;
  launchDateString?: string;
  scheduledLaunchTimestamp?: number; // for upcoming countdown
}

export interface PlanetData {
  id: string;
  name: string;
  type: "Terrestrial" | "Gas Giant" | "Ice Giant" | "Dwarf Planet";
  orderFromSun: number;
  diameterKm: number;
  massEarthRatio: number;
  gravityMps2: number;
  dayLengthHours: number;
  orbitPeriodEarthDays: number;
  distanceFromSunMillionKm: number;
  meanTemperatureC: number;
  moonsCount: number;
  hasRings: boolean;
  atmosphere: string[];
  color: string;
  funFact: string;
  description: string;
  image: string;
}

export interface DeepSkyObject {
  id: string;
  name: string;
  designation: string;
  type: "Galaxy" | "Nebula" | "Star Cluster" | "Nearby Star";
  constellation: string;
  distanceLightYears: string;
  apparentMagnitude: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Deep Sky" | "Solar System" | "Nightscape" | "Black Hole Simulations";
  image: string;
  date: string;
  camera: string;
  telescope: string;
  exposure: string;
  location: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface LearningPath {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  iconName: string;
  modules: {
    id: string;
    title: string;
    readTime: string;
    summary: string;
    keyPoints: string[];
  }[];
}

export interface GlossaryTerm {
  term: string;
  letter: string;
  category: "Cosmology" | "Relativity" | "Mechanics" | "Observational" | "Planetary" | "Astrophysics";
  definition: string;
  relatedTerms: string[];
}
