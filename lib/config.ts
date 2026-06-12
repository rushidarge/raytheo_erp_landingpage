// ================================================================
//  PRODUCT CONFIGURATION
//  Change values here to rebrand the product without hunting
//  through every component file.
// ================================================================

export const CONFIG = {
  // Core identity
  productName: "RestaurantOS AI",
  productShortName: "ROS·AI",
  companyName: "Raytheo Technology",
  tagline: "Intelligence for Modern Restaurants",
  description:
    "An AI-native Restaurant ERP designed to automate operations, optimize profits, and empower restaurant teams through intelligent decision-making.",

  // Launch timing
  launchMonths: 2,

  // Navigation links
  navLinks: [
    { label: "Vision", href: "#vision" },
    { label: "Features", href: "#features" },
    { label: "AI Engine", href: "#ai-engine" },
    { label: "Modules", href: "#modules" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Team", href: "#team" },
    { label: "Waitlist", href: "#waitlist" },
  ],

  // Social links
  social: {
    twitter: "https://twitter.com/restaurantos_ai",
    linkedin: "https://linkedin.com/company/restaurantos-ai",
    github: "https://github.com/restaurantos-ai",
  },

  // Contact
  email: "hello@restaurantos.ai",

  // Waitlist API — swap to your real endpoint in production
  waitlistApiEndpoint: "/api/waitlist",
} as const;

export type Config = typeof CONFIG;
