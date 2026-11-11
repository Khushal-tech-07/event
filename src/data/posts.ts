import { BlogPost } from "../types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "inside-the-event-horizon-general-relativity-breaking-point",
    title: "Inside the Event Horizon: Where General Relativity Meets the Quantum Abyss",
    category: "Black Holes",
    tags: ["Relativity", "Event Horizon", "Hawking Radiation", "Singularity"],
    date: "November 4, 2026",
    readTime: "9 min read",
    featured: true,
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Gravitational lensing simulations revealing the photon sphere and relativistic Doppler beaming around a Kerr black hole.",
    excerpt: "What happens when you cross the ultimate point of no return? Exploring the geometry of spacetime, tidal forces, and the profound information paradox that still divides modern physics.",
    content: `
      <h2>The Boundary Beyond Spacetime</h2>
      <p>Imagine falling toward a celestial object so dense that even photons traveling at 299,792 kilometers per second are irrevocably trapped. As you descend, the universe behind you does not simply fade; it distorts. Light from the stars outside compresses into an intense, iridescent violet ring directly overhead, while below lies the absolute, devouring darkness of the event horizon.</p>
      
      <p>The event horizon is not a physical surface made of matter. There is no wall of iron, no hard crust to collide with. In differential geometry, it is a null hypersurface—a boundary in four-dimensional spacetime where the escape velocity strictly equals the speed of light in vacuum. For a non-rotating Schwarzschild black hole, this radius is governed strictly by mass: R_s = 2GM / c². For our Sun, this radius would measure a modest three kilometers; for Sagittarius A*, the monster anchoring the Milky Way, it spans over 12 million kilometers.</p>

      <blockquote>
        "The black hole teaches us that space can be crumpled like a piece of paper into an infinitesimal dot, that time can be extinguished like a blown-out candle flame, and that the laws of physics that we hold sacred can be revoked."
        <span>— John Archibald Wheeler</span>
      </blockquote>

      <h2>Spaghettification and Tidal Tensor Fields</h2>
      <p>Should an intrepid observer venture past this boundary, the physical fate depends entirely on the black hole's mass. Counterintuitively, falling into a supermassive black hole like M87* (with a mass of 6.5 billion suns) is initially far gentler than plunging toward a stellar-mass black hole. Because tidal acceleration scales inversely with the square of the mass, the gravitational gradient across a six-foot human body at the horizon of M87* is imperceptible—less than one milligee.</p>

      <p>In contrast, approaching a stellar-mass black hole of ten solar masses delivers catastrophic differential forces. The gravitational pull on your feet exceeds the pull on your head by millions of Newtons. This phenomenon, known formally in general relativity as extreme tidal deformation and colloquially as <em>spaghettification</em>, stretches the traveler along the radial geodesic while compressing them laterally along angular coordinates before they even cross the threshold.</p>

      <h2>The Coordinate Inversion: When Space Becomes Time</h2>
      <p>Once across the Schwarzschild radius, an astonishing geometric transformation occurs within the metric tensor. The timelike and spacelike coordinate signs flip in the line element. Outside the horizon, moving forward in time is inevitable; you cannot choose to halt your progression toward tomorrow. Inside the horizon, the radial coordinate <em>r</em> assumes this relentless timelike nature.</p>

      <p>Moving inward toward the central singularity is no longer a spatial journey that can be arrested with rocket thrust; it becomes your inescapable future. In fact, firing thrusters to push outward actually accelerates your demise by increasing your total energy and shortening your proper time to the singularity. For a 10-solar-mass black hole, proper time from the horizon to the singularity is approximately 66 microseconds.</p>

      <h2>The Firewalls and Hawking's Unfinished Revolution</h2>
      <p>In 1974, Stephen Hawking delivered a profound shock to theoretical physics by proving that black holes are not truly black. Through quantum field theory in curved spacetime, virtual particle-antiparticle pairs separated across the horizon result in the emission of blackbody thermal radiation. Over unimaginably long cosmic timescales—roughly 10⁶⁷ years for a stellar black hole—a black hole will slowly lose mass and evaporate completely into thermal photons.</p>

      <p>Yet this revelation ignited the Black Hole Information Paradox. If a book falls into a black hole and the hole subsequently evaporates into purely random thermal Hawking radiation, where did the information within that book go? Quantum mechanics strictly demands unitarity—the conservation of quantum probability and information. General relativity insists that nothing can escape. Decades of debate, from Leonard Susskind's Black Hole Complementarity to the AMPS Firewall hypothesis and Juan Maldacena's holographic ER=EPR conjecture, suggest that resolving this contradiction is our clearest portal into a quantum theory of gravity.</p>
    `,
  },
  {
    id: "post-2",
    slug: "jwst-unraveling-early-universe-impossible-galaxies",
    title: "JWST and the Crisis in Cosmology: The 'Impossible' Early Galaxies",
    category: "Galaxies",
    tags: ["JWST", "Cosmology", "Galaxies", "Redshift", "Dark Matter"],
    date: "October 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Marcus Vance",
      role: "Observational Astronomer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "NIRCam deep field showing high-redshift infant galaxies blazing brightly just 350 million years after the Big Bang.",
    excerpt: "Data from the James Webb Space Telescope continues to challenge standard Lambda-CDM cosmological models. How did massive, fully-formed galaxies appear so quickly after the cosmic dawn?",
    content: `
      <h2>The Cosmic Dawn Rewritten</h2>
      <p>When the James Webb Space Telescope unfurled its 6.5-meter gold-coated beryllium mirror at Lagrange point 2, cosmologists expected to peer back into the dark ages of the cosmos to witness the faint, ragged birth cries of the very first protogalactic clumps. Standard cosmological consensus predicted that assembling massive galaxies required billions of years of hierarchical mergers, guided by slowly clumping cold dark matter halos.</p>

      <p>Instead, NIRCam and NIRSpec returned images that left the community astonished. At redshifts beyond z=10—corresponding to a time when our 13.8-billion-year-old universe was merely 300 to 400 million years old—Webb detected extraordinarily luminous, surprisingly massive galaxies that should theoretically not exist under standard growth assumptions.</p>

      <blockquote>
        "Finding these galaxies is like discovering a fully formed Victorian mansion in the middle of a stone age wilderness. The timetable of stellar genesis must be radically recalibrated."
      </blockquote>

      <h2>Top-Heavy Initial Mass Functions</h2>
      <p>One leading hypothesis to explain this baffling luminosity without violating matter density limits is an exotic Initial Mass Function (IMF). In the modern universe, star formation produces vastly more low-mass red dwarfs than massive blue hypergiants. However, the pristine, metal-free primordial gas (composed exclusively of hydrogen and helium from Big Bang nucleosynthesis) lacked efficient molecular cooling agents.</p>

      <p>Without heavier elements, collapsing gas clouds could only fragment into gargantuan parcels, birthing Population III stars weighing 100 to 1,000 times the mass of our Sun. These celestial leviathans burned at surface temperatures exceeding 50,000 Kelvin, radiating extreme ultraviolet flux and creating immense luminosity with relatively modest total baryonic mass.</p>

      <h2>Overmassive Black Hole Seeds</h2>
      <p>Simultaneously, Webb has uncovered supermassive black holes lurking inside these infant galaxies whose masses rival the stellar mass of the host galaxy itself. In the nearby universe, a central black hole typically accounts for approximately 0.1% of its host bulge's mass. In objects like GN-z11 and CEERS-1019, that ratio surges to 10% or higher.</p>

      <p>This suggests that black holes did not patiently wait for first-generation stars to live and die; instead, massive black hole seeds of 10⁴ to 10⁶ solar masses may have formed via Direct Collapse of pristine gas clouds, serving as gravitational anchors that accelerated galaxy assembly at lightning speed.</p>
    `,
  },
  {
    id: "post-3",
    slug: "hunting-ocean-worlds-europa-enceladus-biosignatures",
    title: "Ocean Worlds of the Outer Solar System: Where Life Lurks in Total Darkness",
    category: "Exoplanets",
    tags: ["Astrobiology", "Europa", "Enceladus", "Subsurface Oceans", "Extremophiles"],
    date: "October 15, 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Plumes of water vapor and organic molecules erupting through cracks in the icy crust of Saturn's moon Enceladus.",
    excerpt: "Forget Mars. The most promising habitats for extraterrestrial life reside beneath dozens of kilometers of ice on Europa and Enceladus, heated by tidal friction and deep hydrothermal vents.",
    content: `
      <h2>The Paradigm Shift in Astrobiology</h2>
      <p>For more than half a century, the search for life beyond Earth was dominated by the concept of the circumstellar habitable zone—the Goldilocks orbital ring around a star where liquid water can pool on a planetary surface under adequate atmospheric pressure. Under this framework, terrestrial bodies like Mars and Venus were our primary targets.</p>

      <p>However, interplanetary flybys by Voyager, Galileo, and Cassini revealed a far grander reality: the vast majority of liquid water in our solar system resides not in sunny orbital bands, but beneath the frozen surfaces of icy moons orbiting gas giants in the frigid outer system. Europa, Ganymede, Callisto, Enceladus, and Titan conceal global subsurface oceans containing several times the combined volume of all Earth's oceans.</p>

      <h2>Tidal Heating: The Eternal Geothermal Engine</h2>
      <p>How does water remain liquid at minus 170 degrees Celsius, hundreds of millions of kilometers from the Sun? The secret lies in orbital mechanics. Europa is locked in a 4:2:1 Laplace orbital resonance with Io and Ganymede around Jupiter. As Europa orbits, the immense gravitational gradient of Jupiter continuously flexes the moon's rocky mantle and ice crust like a squash ball.</p>

      <p>This continuous tidal dissipation produces internal friction that generates billions of watts of heat, melting the base of the ice shell and maintaining a global ocean an estimated 60 to 150 kilometers deep. Crucially, gravity measurements confirm that Europa's ocean is in direct contact with a silicated rocky seafloor, creating the conditions for hydrothermal circulation identical to the Mid-Atlantic Ridge where terrestrial life likely originated.</p>

      <blockquote>
        "If we find life independently originating around an icy moon's hydrothermal vent, where sunlight has never shone, it proves that life is not a miraculous accident, but a cosmic imperative."
      </blockquote>

      <h2>Sampling Plumes in Real Time</h2>
      <p>On Saturn's moon Enceladus, nature has provided a breathtaking shortcut. Cassini discovered cryogenic geysers erupting from tectonic fractures dubbed the 'Tiger Stripes' near the south pole. Flying directly through these plumes, Cassini's mass spectrometers detected water vapor, simple salts, silica nanoparticles (a telltale indicator of 90°C hydrothermal activity), molecular hydrogen (H₂), and complex organic macromolecules.</p>

      <p>The Europa Clipper mission and upcoming proposed life detection landers will search directly for amino acid chirality, lipid matrices, and metabolic biosignatures without even needing to drill through the kilometer-thick ice shield.</p>
    `,
  },
  {
    id: "post-4",
    slug: "gravitational-wave-astronomy-listening-to-spacetime",
    title: "Gravitational Wave Astronomy: How LIGO and Virgo Listen to the Spacetime Fabric",
    category: "Astrophysics",
    tags: ["LIGO", "Gravitational Waves", "Neutron Stars", "Relativity"],
    date: "September 30, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Laser interferometry arms measuring sub-atomic ripples across four kilometers of ultra-high vacuum.",
    excerpt: "For millennia, humanity only looked at the universe through electromagnetic radiation. With laser interferometry, we can now hear the violent mergers of black holes billions of light-years away.",
    content: `
      <h2>The Symphony of Rippling Metric</h2>
      <p>In 1916, Albert Einstein predicted that accelerating masses would produce quadrupole ripples in spacetime propagating at the speed of light. Yet he believed the amplitude would be so vanishingly small that humans would never develop instruments capable of detecting them.</p>
      <p>A century later, the Advanced LIGO detectors in Hanford and Livingston achieved the impossible: detecting strain changes of 10⁻²¹—measuring a displacement one ten-thousandth the diameter of a proton across a four-kilometer laser arm. The event, GW150914, captured the death spiral of two black holes 1.3 billion light-years distant, releasing more peak power in a fraction of a second than all the stars in the observable universe combined.</p>
      <h2>Multi-Messenger Astronomy</h2>
      <p>The detection of binary neutron star merger GW170817 marked the birth of multi-messenger astrophysics. Optical, gamma-ray, and X-ray observatories tracked the kilonova aftermath across the globe, proving that neutron star collisions are the primary cosmic forge producing heavy elements such as gold, platinum, and uranium.</p>
    `,
  },
  {
    id: "post-5",
    slug: "the-hubble-tension-is-our-model-of-the-universe-broken",
    title: "The Hubble Tension: Why the Universe Refuses to Agree on Its Own Expansion Rate",
    category: "Cosmology",
    tags: ["Hubble Tension", "Cosmology", "Dark Energy", "CMB"],
    date: "September 18, 2026",
    readTime: "7 min read",
    author: {
      name: "Marcus Vance",
      role: "Observational Astronomer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Cosmic microwave background fluctuations contrasted against Cepheid variable calibration ladders.",
    excerpt: "Local measurements using Cepheids and Type Ia supernovae measure H₀ around 73 km/s/Mpc, while the Cosmic Microwave Background predicts 67 km/s/Mpc. This 5-sigma discrepancy points to brand new physics.",
    content: `
      <h2>A 5-Sigma Crisis in Fundamental Physics</h2>
      <p>In science, when two independent, world-class measurement methods disagree at the five-sigma level, it usually means one of two things: someone has made a subtle systematic error, or we are on the precipice of discovering revolutionary physics beyond the Standard Model.</p>
      <p>The Planck satellite's precision measurements of temperature fluctuations in the relic 380,000-year-old Cosmic Microwave Background, interpreted through standard Lambda-CDM cosmology, predict an expansion rate of approximately 67.4 km/s/Mpc. Conversely, the SH0ES collaboration using Hubble and JWST calibrations of Cepheid variables and Type Ia supernovae in the local universe persistently measures 73.0 km/s/Mpc.</p>
      <h2>Early Dark Energy or Decaying Neutrinos?</h2>
      <p>JWST's recent verification of Cepheid photometry has effectively eliminated crowding errors, solidifying the tension. Theorists are now exploring captivating solutions: Early Dark Energy (an ephemeral scalar field that briefly accelerated expansion prior to recombination), primordial magnetic fields, or decay of dark matter into relativistic sterile neutrinos.</p>
    `,
  },
  {
    id: "post-6",
    slug: "artemis-and-the-lunar-gateway-permanent-presence",
    title: "Project Artemis: Building the First Permanent Industrial & Scientific Outpost on the Moon",
    category: "Missions",
    tags: ["Artemis", "NASA", "Moon", "Starship", "Deep Space"],
    date: "September 02, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Rendering of Artemis base camp nestled beside the permanently shadowed Shackleton Crater.",
    excerpt: "With the Artemis campaign, humanity is returning to the lunar south pole—not for a quick photo op, but to harness permanently shadowed water ice and construct the orbital Lunar Gateway.",
    content: `
      <h2>The Lunar South Pole and Frozen Billions</h2>
      <p>Unlike the equatorial plains explored during Apollo, the lunar south pole offers unique strategic terrain. Peaks of Eternal Light experience nearly continuous solar illumination, providing reliable photovoltaic power, while adjacent craters like Shackleton possess deep floors that have remained in cryogenic darkness for over two billion years.</p>
      <p>Spectroscopic probes confirm that these cold traps harbor hundreds of millions of metric tons of water ice. In situ resource utilization (ISRU) will crack this water into liquid hydrogen and oxygen propellant, transforming the Moon into a deep-space fueling depot for future expeditions to Mars.</p>
    `,
  },
  {
    id: "post-7",
    slug: "supermassive-black-hole-jets-cosmic-particle-accelerators",
    title: "Relativistic Jets: The Universe's Most Powerful Particle Accelerators",
    category: "Black Holes",
    tags: ["Relativistic Jets", "Quasars", "Blandford-Znajek", "Magnetic Fields"],
    date: "August 20, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "M87's famous relativistic plasma jet shooting five thousand light-years into intergalactic space.",
    excerpt: "How do black holes—renowned for eating everything—manage to shoot twin streams of ultra-relativistic plasma across millions of light-years? Enter the Blandford-Znajek mechanism.",
    content: `
      <h2>Extracting the Rotational Energy of Spacetime</h2>
      <p>When a spinning black hole drags spacetime in its ergosphere (frame dragging), magnetic field lines anchored in the surrounding accretion disk become twisted into a tight helical coil along the rotation axis. Through the Blandford-Znajek process, electromagnetic torque extracts the black hole's rotational energy directly, flinging matter outward at 99.9% the speed of light.</p>
      <p>These jets sculpt the morphology of entire galaxy clusters, heating intracluster gas and preventing runaway starbursts in an intricate cosmic feedback loop that regulates galaxy evolution.</p>
    `,
  },
  {
    id: "post-8",
    slug: "trappist-1-seven-temperate-worlds-one-star",
    title: "The TRAPPIST-1 System: Seven Earth-Sized Worlds Around an Ultracool Dwarf",
    category: "Exoplanets",
    tags: ["TRAPPIST-1", "Exoplanets", "Red Dwarfs", "Atmospheric Biosignatures"],
    date: "August 05, 2026",
    readTime: "7 min read",
    author: {
      name: "Marcus Vance",
      role: "Observational Astronomer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Artist visualization of the tightly packed TRAPPIST-1 planetary chain in Laplace resonance.",
    excerpt: "Just 40 light-years away in Aquarius, seven rocky worlds orbit an ultra-cool red dwarf in musical orbital synchrony. Could any of them maintain a thick protective atmosphere?",
    content: `
      <h2>A Miniature Solar System in Harmonic Resonance</h2>
      <p>The entire TRAPPIST-1 planetary family could fit well inside the orbit of Mercury. Yet because TRAPPIST-1 is an M-dwarf with less than 9% of our Sun's mass and luminosity, planets d, e, f, and g sit squarely within its temperate zone, capable of hosting liquid water.</p>
      <p>Webb's transmission spectroscopy is actively analyzing the thermal emission of TRAPPIST-1b and 1c, searching for signatures of carbon dioxide, water, and methane, offering humanity our first genuine look into the atmospheres of terrestrial alien worlds.</p>
    `,
  },
  {
    id: "post-9",
    slug: "cosmic-inflation-echoes-from-the-first-picosecond",
    title: "Cosmic Inflation: Echoes from the First 10⁻³⁶ Seconds of Creation",
    category: "Cosmology",
    tags: ["Cosmic Inflation", "Primordial B-Modes", "Big Bang", "Quantum Fluctuations"],
    date: "July 22, 2026",
    readTime: "8 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Simulated primordial gravitational wave polarization patterns in the cosmic microwave background.",
    excerpt: "Why is the universe so remarkably flat and uniform? Alan Guth's inflation theory solves these profound cosmological puzzles by proposing an era of exponential spatial expansion.",
    content: `
      <h2>The Horizon and Flatness Dilemma</h2>
      <p>Look at opposite sides of the night sky, separated by tens of billions of light-years. They have never been in thermal contact within the age of the universe, yet their temperatures in the CMB match to one part in 100,000. Inflation elegantly explains this: before 10⁻³² seconds, the entire observable universe was confined to a microscopic subatomic patch in thermal equilibrium.</p>
      <p>A scalar field then drove exponential expansion, stretching microscopic quantum fluctuations into the cosmological seeds that eventually collapsed into galaxies, clusters, and every star we see today.</p>
    `,
  },
  {
    id: "post-10",
    slug: "neutron-star-crusts-nuclear-pasta-strongest-material",
    title: "Nuclear Pasta: Inside the Crushing Hearts of Neutron Stars",
    category: "Astrophysics",
    tags: ["Neutron Stars", "Nuclear Pasta", "Pulsars", "Degenerate Matter"],
    date: "July 08, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Theoretical cross-section of a neutron star crust showing gnocchi, spaghetti, and lasagna nuclear phases.",
    excerpt: "With a density of 100 million metric tons per cubic centimeter, atomic nuclei in a neutron star crust are compressed into exotic geometrical shapes that form the strongest material in the universe.",
    content: `
      <h2>Gnocchi, Spaghetti, and Lasagna in the Stellar Core</h2>
      <p>At the boundary between a neutron star's outer crust and its superfluid core, Coulomb repulsion between protons competes fiercely with the attractive strong nuclear force. The result is a bizarre suite of quantum matter phases dubbed nuclear pasta: spherical droplets ('gnocchi'), elongated rods ('spaghetti'), and flattened sheets ('lasagna').</p>
      <p>Supercomputer calculations reveal that nuclear pasta has a shear modulus ten billion times greater than high-carbon steel, making it the strongest theoretical substance known to physics.</p>
    `,
  },
  {
    id: "post-11",
    slug: "voyager-golden-record-interstellar-time-capsule",
    title: "Voyager's Eternal Voyage: The Golden Record Sailing Across the Interstellar Void",
    category: "Missions",
    tags: ["Voyager", "Interstellar", "Golden Record", "Deep Space"],
    date: "June 25, 2026",
    readTime: "5 min read",
    author: {
      name: "Marcus Vance",
      role: "Observational Astronomer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Voyager 1 cruising past the heliopause into the uncharted interstellar medium.",
    excerpt: "Launched in 1977, Voyager 1 and 2 have passed through the heliopause into the interstellar medium. Armed with Carl Sagan's Golden Record, they will wander the galaxy long after our Sun has cooled.",
    content: `
      <h2>The Farthest Human Artifacts</h2>
      <p>Over 24 billion kilometers from Earth, Voyager 1 is the most distant envoy of our species. It takes radio signals more than 22 hours traveling at the speed of light to reach its high-gain antenna. Yet its nuclear battery (RTG) still faintly hums, measuring the cosmic rays and magnetic density of pure interstellar space.</p>
      <p>Affixed to its flank is a gold-plated copper phonograph record encoded with 115 images, sounds of wind and thunder, greetings in 55 languages, and music ranging from Bach to Chuck Berry—a message in a bottle adrift in an ocean of silence.</p>
    `,
  },
  {
    id: "post-12",
    slug: "the-great-attractor-and-laniakea-our-cosmic-home",
    title: "Laniakea: Mapping Our Supercluster and the Enigma of the Great Attractor",
    category: "Galaxies",
    tags: ["Laniakea", "Great Attractor", "Cosmic Web", "Milky Way"],
    date: "June 12, 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Elena Vance",
      role: "Lead Astrophysicist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Visualizing the gravitational watersheds of Laniakea, spanning 520 million light-years.",
    excerpt: "Our galaxy is not wandering randomly. We are falling at 600 kilometers per second toward a hidden gravitational anomaly known as the Great Attractor, nestled within our supercluster Laniakea.",
    content: `
      <h2>The Gravitational Watershed of the Local Universe</h2>
      <p>By mapping the peculiar velocity flows of more than 8,000 galaxies after subtracting the uniform Hubble expansion, astrophysicist R. Brent Tully discovered that the Milky Way belongs to a gargantuan cosmic structure spanning 520 million light-years and containing the mass of 10¹⁷ suns: Laniakea ('Immeasurable Heaven' in Hawaiian).</p>
      <p>At the focal point of this celestial basin lies the Great Attractor, shrouded behind the dust of our own galactic disk in the Zone of Avoidance, pulling hundreds of thousands of galaxies toward its gravitational center.</p>
    `,
  },
];
