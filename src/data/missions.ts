import { SpaceMission } from "../types";

export const SPACE_MISSIONS: SpaceMission[] = [
  {
    id: "sputnik-1",
    name: "Sputnik 1",
    agency: "Roscosmos",
    year: 1957,
    status: "Past",
    target: "Low Earth Orbit",
    objective: "Inaugurate the space age with the first artificial satellite orbiting Earth.",
    highlights: [
      "Transmitted radio beeps at 20.005 and 40.002 MHz for 21 days",
      "Completed 1,440 orbits over 92 days",
      "Provided first data on the density of the upper atmosphere via orbital drag."
    ],
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "October 4, 1957",
  },
  {
    id: "apollo-11",
    name: "Apollo 11",
    agency: "NASA",
    year: 1969,
    status: "Past",
    target: "The Moon (Mare Tranquillitatis)",
    objective: "Land humans on the lunar surface and return them safely to Earth.",
    highlights: [
      "Neil Armstrong and Buzz Aldrin spent 21 hours and 36 minutes on the Moon",
      "Collected 21.55 kg of lunar regolith and rock samples",
      "Watched live by an estimated 650 million people worldwide."
    ],
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "July 16, 1969",
  },
  {
    id: "voyager-1",
    name: "Voyager 1",
    agency: "NASA",
    year: 1977,
    status: "Active",
    target: "Jupiter, Saturn & Interstellar Medium",
    objective: "Conduct flybys of outer gas giants and venture into uncharted interstellar space.",
    highlights: [
      "Crossed the heliopause into interstellar space in August 2012",
      "Currently over 24 billion kilometers (162 AU) from Earth",
      "Carries the Golden Record encoded with sounds and images of Earth."
    ],
    image: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "September 5, 1977",
  },
  {
    id: "hubble-space-telescope",
    name: "Hubble Space Telescope",
    agency: "NASA",
    year: 1990,
    status: "Active",
    target: "Low Earth Orbit (540 km)",
    objective: "Observe cosmic phenomena with ultra-sharp optical and ultraviolet vision above atmospheric turbulence.",
    highlights: [
      "Over 1.5 million observations spanning 34+ years of science",
      "Determined the rate of expansion of the universe (Hubble constant)",
      "Captured the iconic Hubble Deep Field, revealing thousands of distant infant galaxies."
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "April 24, 1990",
  },
  {
    id: "cassini-huygens",
    name: "Cassini-Huygens",
    agency: "NASA",
    year: 1997,
    status: "Past",
    target: "Saturnian System & Titan",
    objective: "Examine Saturn's rings, magnetosphere, and complex satellite system.",
    highlights: [
      "Landed ESA's Huygens probe on liquid-methane world Titan in 2005",
      "Discovered active cryogenic water-ice geysers on Enceladus",
      "Concluded with the fiery 'Grand Finale' plunge into Saturn's atmosphere in 2017."
    ],
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "October 15, 1997",
  },
  {
    id: "curiosity-rover",
    name: "Mars Science Laboratory (Curiosity)",
    agency: "NASA",
    year: 2011,
    status: "Active",
    target: "Mars (Gale Crater & Mount Sharp)",
    objective: "Determine whether Mars ever harbored environmental conditions favorable for microbial life.",
    highlights: [
      "Pioneered the rocket-powered Sky Crane descent system",
      "Confirmed ancient freshwater lake environment with bio-essential elements",
      "Over 4,300 sols and 32 kilometers traveled on the Martian surface."
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "November 26, 2011",
  },
  {
    id: "chandrayaan-3",
    name: "Chandrayaan-3",
    agency: "ISRO",
    year: 2023,
    status: "Active",
    target: "Lunar South Pole",
    objective: "Demonstrate safe and soft landing near the lunar south polar region and deploy the Pragyan rover.",
    highlights: [
      "Made India the first nation to soft-land near the lunar south pole",
      "Detected sulfur, iron, and titanium on the lunar regolith",
      "Measured thermal conductivity profile of the top polar soil layer."
    ],
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "July 14, 2023",
  },
  {
    id: "james-webb-space-telescope",
    name: "James Webb Space Telescope (JWST)",
    agency: "NASA",
    year: 2021,
    status: "Active",
    target: "Sun-Earth L2 Lagrange Point (1.5M km)",
    objective: "Peer into the infrared universe to study the first galaxies, star formation, and exoplanet atmospheres.",
    highlights: [
      "6.5-meter gold-plated beryllium reflector with 5-layer tennis-court sized sunshield",
      "Detected galaxies at redshift z > 13 just 300 million years after the Big Bang",
      "Discovered atmospheric carbon dioxide and water vapor on alien worlds."
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "December 25, 2021",
  },
  {
    id: "artemis-ii",
    name: "Artemis II",
    agency: "NASA",
    year: 2025,
    status: "Active",
    target: "Lunar Free-Return Orbit",
    objective: "First crewed flight test of the Space Launch System (SLS) rocket and Orion spacecraft around the Moon.",
    highlights: [
      "Four astronauts (Wiseman, Glover, Hansen, Koch) performing a 10-day translunar voyage",
      "Validates life support, communication, and navigation systems in deep space",
      "Paves the way for Artemis III crewed south pole landing."
    ],
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "September 2025",
  },
  {
    id: "europa-clipper",
    name: "Europa Clipper",
    agency: "NASA",
    year: 2024,
    status: "Active",
    target: "Jupiter's Moon Europa",
    objective: "Investigate whether the icy Jovian moon possesses conditions suitable to sustain life.",
    highlights: [
      "Largest spacecraft NASA has ever developed for a planetary mission",
      "Will perform nearly 50 close flybys of Europa dipping to 25 km altitude",
      "Equipped with ice-penetrating radar, infrared spectrometers, and dust analyzers."
    ],
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "October 14, 2024",
  },
  {
    id: "nancy-grace-roman",
    name: "Nancy Grace Roman Space Telescope",
    agency: "NASA",
    year: 2027,
    status: "Upcoming",
    target: "Sun-Earth L2 Lagrange Point",
    objective: "Wide-field infrared survey studying dark energy, dark matter, and discovering thousands of exoplanets.",
    highlights: [
      "Field of view 100 times larger than the Hubble Space Telescope with matching sharpness",
      "Will survey billions of galaxies to measure the expansion history of spacetime",
      "Carries an advanced starlight coronagraph to image Jupiter-sized exoplanets directly."
    ],
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "May 2027",
    scheduledLaunchTimestamp: Date.now() + 180 * 24 * 60 * 60 * 1000, // dynamic countdown
  },
  {
    id: "starship-mars-uncrewed",
    name: "Starship Mars Flight 1",
    agency: "SpaceX",
    year: 2027,
    status: "Upcoming",
    target: "Mars Surface",
    objective: "Demonstrate interplanetary aerocapture, atmospheric entry, and vertical landing of a massive payload on Mars.",
    highlights: [
      "Full reusability with orbital refueling propellant transfer",
      "Payload capacity of over 100 metric tons to the Martian regolith",
      "Prepares the critical infrastructure and ISRU power plants for future crewed settlement."
    ],
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1000&q=80",
    launchDateString: "Late 2027",
    scheduledLaunchTimestamp: Date.now() + 320 * 24 * 60 * 60 * 1000, // dynamic countdown
  },
];
