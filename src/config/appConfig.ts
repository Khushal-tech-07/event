/**
 * Global Configuration for Event Horizon
 * Easy to customize: replace BACKGROUND_VIDEO_URL with your own MP4 video file.
 */

// Replace this URL with your custom MP4 video URL if desired.
// High quality, subtle cosmic loop placeholder
export const BACKGROUND_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-star-field-in-space-31792-large.mp4";

// Optional backup video source
export const BACKUP_VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";

export const SITE_CONFIG = {
  name: "EVENT HORIZON",
  tagline: "Journey Beyond the Threshold of Known Physics",
  description: "An immersive space and astronomy chronicle exploring black holes, gravitational waves, cosmic origins, and the frontiers of astrophysics.",
  author: {
    name: "Dr. Elena Vance & Team",
    role: "Astrophysicist & Science Communicator",
    location: "Atacama / Mauna Kea & Digital Observatory",
    bio: "Astrophysics researcher focused on supermassive black hole accretion dynamics and relativistic jets. Dedicated to translating cosmic wonders into accessible visual narratives.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  social: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Black Holes", path: "/black-holes" },
    { label: "Explorer", path: "/explorer" },
    { label: "Blog", path: "/blog" },
    { label: "Missions", path: "/missions" },
    { label: "Gallery", path: "/gallery" },
    { label: "Academy", path: "/academy" },
    { label: "Tools", path: "/tools" },
    { label: "Glossary", path: "/glossary" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
};
