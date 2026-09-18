export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  overview: string;
  whatIBuilt: string[];
  keyFeatures: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    databaseAndTools: string[];
  };
  architecture: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "calories-app",
    title: "Calories App (CalPal)",
    slug: "Calories-app",
    tagline:
      "Full-stack metabolic health and calorie tracking platform with clinical metabolic calculations, verified food databases, and integrated multimodal AI vision",
    shortDescription:
      "An enterprise-grade, full-stack nutrition platform featuring clinical Mifflin-St Jeor metabolic calculations, verified food databases, integrated Google Gemini 3.6 Flash vision logging, and Clerk authentication with PostgreSQL and NestJS.",
    tags: [
      "Next.js 16",
      "React 19",
      "NestJS 11",
      "TypeScript",
      "PostgreSQL 16",
      "Prisma 7",
      "Google Gemini 3.6",
      "FatSecret API",
      "Clerk Auth",
      "Docker Compose"
    ],
    githubUrl: "https://github.com/RiywSu01/Calories-app",
    liveUrl: "https://calpal-app-eta.vercel.app",
    accentColor: "#FEB05D",
    images: [
      "/projects/calpal-image/dashboardpage.png",
      "/projects/calpal-image/homepage.png",
      "/projects/calpal-image/addfoodAiAnalyze.png",
      "/projects/calpal-image/addfoodsection.png",
      "/projects/calpal-image/addfoodpage.png",
      "/projects/calpal-image/customizefood.png"
    ],
    overview:
      "CalPal is a full-stack nutrition and calorie tracking platform engineered to eliminate dietary tracking fatigue, inaccurate caloric estimations, and privacy concerns. The system calculates personal Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the validated Mifflin-St Jeor formula with a strict 1,200 kcal clinical safety floor and dynamic 30/25/45 macronutrient splits. It combines dual-tier food sourcing (custom user recipes plus 1,000,000+ brand-verified clinical food items via the FatSecret Platform API) with Multimodal AI Vision powered by Google Gemini 3.6 Flash.",
    whatIBuilt: [
      "Full-stack multi-container architecture connecting Next.js 16 (React 19 App Router) frontend to an enterprise NestJS 11 REST backend with Prisma ORM 7 and PostgreSQL 16.",
      "Two-stage multimodal pipeline integrating Google Gemini 3.6 Flash and the FatSecret Platform API.",
      "Bi-directional identity synchronization between Clerk Auth and PostgreSQL using cryptographically signed Svix webhooks (with raw body signature auditing) and React 19 Server Actions.",
      "3-tier sliding-window rate limiter (@nestjs/throttler for Burst, Medium, and Sustained tiers) and in-memory caching (@nestjs/cache-manager) complying with FatSecret's 24-hour API Terms of Service.",
      "Interactive metabolic dashboard featuring a 7-day dynamic calendar carousel, animated SVG calorie ring with mint/coral chromatic feedback, macro meters, and optimistic deletion with background sync.",
      "Server-protected admin console (/admin) guarded with role-based access control (RBAC), atomic role mutations, and unified user-profile directory.",
      "Hardened multi-stage Docker Compose deployment running Alpine Linux non-root containers with automated database health checks."
    ],
    keyFeatures: [
      "Clinical Metabolic Engine: Automated BMR and TDEE calculations via the Mifflin-St Jeor formulation with activity multipliers and a 1,200 kcal safety minimum.",
      "Multimodal AI Vision: Instant photo-to-diary meal logging using Google Gemini 3.6 Flash and the FatSecret Platform API.",
      "Verified Clinical Food Database: Live keyword search and portion scaling across 1M+ clinical food items via OAuth 2.0 FatSecret Platform API.",
      "7-Day Dynamic Calendar Dashboard: Real-time week carousel, animated SVG calorie ring, macro tracking (protein, carbs, fat), and meal category accordions (Breakfast, Lunch, Dinner).",
      "Server-Protected RBAC Admin Console: Strictly guarded admin routes with atomic user/admin role toggling and synchronized Clerk/PostgreSQL directories.",
      "Biometric Onboarding Wizard: 3-step responsive questionnaire calculating customized daily caloric targets for weight loss (-500 kcal), maintenance, or muscle gain (+300 kcal)."
    ],
    technologies: {
      frontend: [
        "Next.js 16 (App Router)",
        "React 19",
        "Tailwind CSS v4",
        "TypeScript",
        "Clerk Auth (@clerk/nextjs)",
        "Lucide React"
      ],
      backend: [
        "NestJS 11",
        "TypeScript",
        "Express",
        "Prisma ORM 7",
        "@nestjs/throttler",
        "@nestjs/cache-manager",
        "Swagger UI"
      ],
      databaseAndTools: [
        "PostgreSQL 16 (Alpine)",
        "Docker Compose",
        "Google Gemini 3.6 Flash",
        "FatSecret Platform REST API",
        "Svix Webhooks",
        "Jest"
      ]
    },
    architecture:
      "Client requests from the Next.js 16 frontend communicate with the NestJS 11 backend via a typed REST client. Clerk handles authentication and session claims, dispatching cryptographically signed Svix webhooks with raw body auditing directly to the NestJS webhook controller to synchronize PostgreSQL user records. The AI vision controller receives compressed meal images in-memory, queries Gemini 3.6 Flash for dish decomposition, cross-references ingredients against FatSecret REST endpoints, and commits meal entries to PostgreSQL with Prisma relations."
  },
  {
    id: "hotel-management-system",
    title: "HotelManagement System",
    slug: "HotelMangementSystem-NestJS",
    tagline:
      "Production-ready hotel booking and room reservation REST API built with NestJS, Prisma ORM, and MySQL",
    shortDescription:
      "A production-ready RESTful API for managing hotel room bookings, room inventory, and user reservations. Built with NestJS 11, Prisma 7, and MySQL 8.0, featuring JWT authentication, RBAC authorization, in-memory caching, rate limiting, and Docker/Nginx deployment.",
    tags: [
      "NestJS 11",
      "TypeScript 5",
      "Prisma 7",
      "MySQL 8.0",
      "Docker Compose",
      "Nginx",
      "JWT Auth",
      "Swagger UI",
      "Jest"
    ],
    githubUrl: "https://github.com/RiywSu01/HotelMangementSystem-NestJS",
    accentColor: "#5A7ACD",
    images: [
      "/projects/hotelManagementSystem-image/hotel-1.svg",
      "/projects/hotelManagementSystem-image/hotel-2.svg",
      "/projects/hotelManagementSystem-image/hotel-3.svg"
    ],
    overview:
      "Developed for the ITCS258 Backend Application Development course at Mahidol University, this production-ready REST API manages hotel room inventory, real-time booking reservations, and administrative workflows. Built with NestJS 11 and Prisma ORM on MySQL 8.0, the system enforces JWT authentication with bcrypt password hashing (12 salt rounds), custom RBAC guards, global rate limiting, event-driven in-app notifications, and full Docker containerization behind an Nginx reverse proxy.",
    whatIBuilt: [
      "Modular backend architecture dividing domain logic across Auth, Users, Rooms, Bookings, Health, and Prisma modules.",
      "Secure authentication and authorization engine with Passport JWT strategy, custom @GetUser and @Roles decorators, and RolesGuard distinguishing USER and ADMIN access privileges.",
      "Conflict-free room booking lifecycle with date range overlap validation, automatic status transitions (Pending, Approved, Cancelled, Paid), and real-time room capacity checks.",
      "Decoupled asynchronous notification system using @nestjs/event-emitter dispatching booking creation and cancellation alerts without blocking request threads.",
      "In-memory response caching via @nestjs/cache-manager with a 60-second TTL on public room read endpoints, significantly reducing database read load.",
      "Comprehensive Swagger UI documentation at /api/docs, automated unit and integration tests with Jest and Supertest, and multi-stage Docker deployment behind an Nginx reverse proxy."
    ],
    keyFeatures: [
      "JWT Authentication & RBAC: Secure registration, login, and token verification with bcrypt password hashing (12 rounds) and custom role-based access guards.",
      "Room Inventory Management: Full administrative CRUD for hotel rooms including capacity, pricing per night, active dates, and image URLs.",
      "Booking & Conflict Detection: Automated date overlap validation preventing double-booking for the same room with complete status workflows.",
      "Event-Driven Notifications: Asynchronous event dispatching on booking creation and cancellation via @nestjs/event-emitter.",
      "In-Memory Caching & Throttling: 60s cache TTL on public room queries and global rate limiting (60 req/min with strict auth limits) via @nestjs/throttler.",
      "Docker & Reverse-Proxy Deployment: Multi-stage Docker Compose orchestration pairing NestJS with MySQL 8.0 and Nginx reverse proxy on port 80."
    ],
    technologies: {
      frontend: [
        "Swagger UI (/api/docs)",
        "Postman Collections",
        "RESTful API Clients"
      ],
      backend: [
        "NestJS 11 (Node.js 20)",
        "TypeScript 5",
        "Passport JWT",
        "bcrypt (12 rounds)",
        "@nestjs/event-emitter",
        "@nestjs/throttler",
        "@nestjs/cache-manager"
      ],
      databaseAndTools: [
        "MySQL 8.0",
        "Prisma ORM 7 (@prisma/adapter-mariadb)",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Jest",
        "Supertest"
      ]
    },
    architecture:
      "In production containerization, incoming HTTP client requests reach Nginx on port 80, which acts as a reverse proxy routing /api/* requests to the internal NestJS container on port 3000. NestJS applies throttler guards, intercepts requests with JWT auth guards, consults the in-memory cache for room reads, and routes business logic to Prisma ORM connected to MySQL 8.0 on an isolated Docker bridge network."
  },
  {
    id: "project-mykea",
    title: "MYKEA — Bedding Accessories Store",
    slug: "Project_MYKEA",
    tagline:
      "E-commerce web application for online bedding accessories with catalog search, interactive carousels, and admin management",
    shortDescription:
      "An online bedding accessories store featuring a customer storefront with live product search, interactive Swiper carousels, detailed product views, and a protected administrative console for product CRUD operations, powered by Node.js, Express, and MySQL.",
    tags: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Bootstrap 5",
      "Swiper.js",
      "HTML5/CSS3",
      "Longdo Map API"
    ],
    githubUrl: "https://github.com/RiywSu01/Project_MYKEA",
    accentColor: "#27C93F",
    images: [
      "/projects/mykea-image/mykea-home.png",
      "/projects/mykea-image/mykea-catalog.png",
      "/projects/mykea-image/mykea-detail.png",
      "/projects/mykea-image/mykea-admin.png",
      "/projects/mykea-image/mykea-contact.png"
    ],
    overview:
      "MYKEA is a e-commerce web application dedicated to bedding accessories. Built with a responsive frontend and a dedicated Node.js/Express backend, it provides customers with an interactive storefront to browse featured bedding products via Swiper carousels, search inventory by product title, and view comprehensive product specifications. For store operators, MYKEA includes a credential-protected Product Management portal to create, update, and delete catalog inventory directly against a MySQL database.",
    whatIBuilt: [
      "End-to-end e-commerce architecture separating responsive multi-page frontend (HTML5, CSS3, Bootstrap 5, JavaScript) from the Express.js REST API backend (app.js).",
      "Interactive storefront homepage featuring hero banners, multi-item Swiper product carousels, and category browsing for quilts, pillows, and bed sheets.",
      "Real-time catalog search engine filtering products dynamically by title with clean result rendering and direct item navigation.",
      "Detailed Product Detail view rendering high-resolution product photography, SKU code (productCode), pricing, material specifications, and stock status.",
      "Role-protected Product Management administrative portal (/ProductManagement) requiring admin authentication to execute CRUD operations on the inventory database.",
      "Relational MySQL database schema (mykea_database) with structured tables for products, categories, user accounts, and administrative credentials.",
      "Interactive company contact and store locator integration using the Longdo Map public geolocation API."
    ],
    keyFeatures: [
      "Dynamic Storefront & Swiper Carousels: Interactive home page with featured bedding product carousels and smooth touch-swipe navigation.",
      "Catalog Search & Filtering: Fast product title search with instant redirection to detailed item records.",
      "Individual Product Detail View: Deep-dive product pages (ProductDetail.html?productCode=...) with dimensions, fabric materials, care instructions, and pricing.",
      "Administrative Product Management: Secure admin portal for inventory management with full product creation, modification, and deletion capabilities.",
      "Authentication & Role Access: Credential verification for admin accounts stored securely in the MySQL User table.",
      "Store Locator & Contact Integration: Contact and company information integrated with the Longdo Map public geolocation API."
    ],
    technologies: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Bootstrap 5",
        "Swiper.js",
        "Responsive Layouts"
      ],
      backend: [
        "Node.js",
        "Express.js 5",
        "mysql2",
        "dotenv",
        "Nodemon"
      ],
      databaseAndTools: [
        "MySQL (mykea_database)",
        "SQL Relational Schema",
        "Longdo Map API",
        "Git"
      ]
    },
    architecture:
      "The client browser interacts with responsive HTML5/Bootstrap pages that communicate via asynchronous fetch requests to an Express.js backend server (app.js). The Express server routes public endpoints for catalog browsing, product search, and detail lookups, while authenticating administrative actions against the MySQL database using parameterized SQL queries with mysql2."
  }
];
