# Supawit Sirikulpiboon — Full-Stack Developer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A high-performance, interactive personal portfolio website showcasing full-stack applications, scalable backend architectures, and engineering case studies.
</p>

[**View Live CalPal Demo**](https://calpal-app-eta.vercel.app) • [**GitHub Profile**](https://github.com/RiywSu01) • [**LinkedIn**](https://www.linkedin.com/in/supawit-sirikulpiboon-836ba8390/) • [**Email Me**](mailto:supawit.sik@student.mahidol.ac.th)

</div>

---

## 📌 Table of Contents

- [About Me](#-about-me)
- [Key Features](#-key-features)
- [Featured Projects](#-featured-projects)
  - [1. CalPal — Metabolic Health & Calorie Tracking Platform](#1-calpal--metabolic-health--calorie-tracking-platform)
  - [2. Hotel Management System — Booking REST API](#2-hotel-management-system--booking-rest-api)
  - [3. MYKEA — Bedding Accessories E-Commerce Store](#3-mykea--bedding-accessories-e-commerce-store)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Design Philosophy](#-design-philosophy)
- [Contact](#-contact)

---

## 👨‍💻 About Me

I am an ICT undergraduate at **Mahidol University** specializing in full-stack web application development and distributed backend architectures. 

My engineering focus centers on building reliable RESTful APIs, type-safe database systems, secure authentication with role-based access control (RBAC), multi-stage Dockerized services, and integrating multimodal AI vision systems (Google Gemini) into real-world applications.

- 🎓 **Education:** B.Sc. in Information and Communication Technology, Mahidol University
- 💼 **Primary Focus:** Full-Stack Web Development, Backend Architecture, API Security & DevOps
- 📍 **Location:** Bangkok, Thailand
- 🌐 **Portfolio Codebase:** Next.js 16 (App Router), React 19, TypeScript, Motion, Tailwind CSS v4

---

## ⚡ Key Features

- **Dual View Modes for Projects:**
  - **Showcase Mode:** Expansive, high-impact layout highlighting engineered capabilities, architecture descriptions, tech badges, and browser mockups.
  - **Grid Mode:** Clean 2-column layout with responsive aspect ratios for quick browsing.
- **Interactive Multi-Image Project Carousels:**
  - Responsive `aspect-[16/10]` display on cards with smooth swipe, drag, next/previous buttons, and dot indicators.
- **High-Definition Lightbox Overlay:**
  - Prominent apricot **Zoom** button opening an uncropped, 1080p full-bleed lightbox with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`) and image captions.
- **Deep-Dive Case Study Modals:**
  - Comprehensive breakdowns including **Overview**, **What I Built**, **Key Features**, **Technologies**, and **Architecture** specifications.
- **Live Deployed Links & Repository Integration:**
  - Direct access to live deployed web applications (such as [CalPal on Vercel](https://calpal-app-eta.vercel.app)) and GitHub repositories.
- **Fluid Micro-Animations & Design Polish:**
  - Smooth entrance animations, magnetic button hover interactions, and subtle topographic blueprint line accents.

---

## 🚀 Featured Projects

### 1. CalPal — Metabolic Health & Calorie Tracking Platform
> *Full-stack metabolic health and calorie tracking platform with clinical metabolic calculations, verified food databases, and multimodal AI vision.*

- **Live Demo:** [https://calpal-app-eta.vercel.app](https://calpal-app-eta.vercel.app) ↗
- **Repository:** [https://github.com/RiywSu01/Calories-app](https://github.com/RiywSu01/Calories-app) ↗
- **Tech Stack:** Next.js 16 (React 19), NestJS 11, TypeScript, PostgreSQL 16, Prisma 7, Google Gemini 3.6 Flash, FatSecret Platform API, Clerk Auth, Docker Compose.
- **Key Engineering Highlights:**
  - Mifflin-St Jeor clinical metabolic engine calculating BMR and TDEE with a strict 1,200 kcal clinical safety floor.
  - Two-stage multimodal AI vision logging via Google Gemini 3.6 Flash and FatSecret OAuth 2.0 API.
  - Bi-directional identity synchronization with Clerk Auth via cryptographically signed Svix webhooks.
  - 3-tier sliding-window rate limiting (`@nestjs/throttler`) and memory caching.

---

### 2. Hotel Management System — Booking REST API
> *Production-ready hotel room inventory and reservation REST API with RBAC, caching, and containerized deployment.*

- **Repository:** [https://github.com/RiywSu01/HotelMangementSystem-NestJS](https://github.com/RiywSu01/HotelMangementSystem-NestJS) ↗
- **Tech Stack:** NestJS 11, TypeScript 5, Prisma 7, MySQL 8.0, Docker Compose, Nginx, Passport JWT, Swagger UI, Jest.
- **Key Engineering Highlights:**
  - Conflict-free room booking lifecycle with date range overlap validation and automatic status transitions.
  - Custom `@GetUser` and `@Roles` decorators with `RolesGuard` distinguishing `USER` and `ADMIN` privileges.
  - Asynchronous event notifications via `@nestjs/event-emitter`.
  - In-memory caching with `@nestjs/cache-manager` on high-traffic read routes.

---

### 3. MYKEA — Bedding Accessories E-Commerce Store
> *E-commerce web application with catalog search, interactive Swiper carousels, and administrative inventory management.*

- **Repository:** [https://github.com/RiywSu01/Project_MYKEA](https://github.com/RiywSu01/Project_MYKEA) ↗
- **Tech Stack:** Node.js, Express.js 5, MySQL, Bootstrap 5, JavaScript (ES6+), Swiper.js, Longdo Map API.
- **Key Engineering Highlights:**
  - Multi-page responsive storefront with product carousels and instant title search filtering.
  - Protected admin portal (`/ProductManagement`) for database inventory CRUD operations.
  - Longdo Map public geolocation integration for physical store locations.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion, Lucide Icons, Radix UI |
| **Backend** | NestJS 11, Node.js, Express.js, RESTful APIs, Swagger / OpenAPI |
| **Databases & ORM** | PostgreSQL 16, MySQL 8.0, Prisma ORM 7, Redis |
| **Security & Auth** | Clerk Auth, JWT, Passport.js, Bcrypt (12 rounds), Svix Webhook Verification, RBAC |
| **DevOps & Tools** | Docker & Docker Compose, Nginx Reverse Proxy, Git, GitHub Actions, Vercel |
| **AI & APIs** | Google Gemini 3.6 Flash (Multimodal Vision), FatSecret Platform API, Longdo Map API |
| **Testing** | Jest, Supertest, React Testing Library |

---

## 📁 Project Structure

```bash
portfolio/
├── app/
│   ├── globals.css              # Tailwind CSS v4 styling & theme tokens
│   ├── layout.tsx               # Root layout & SEO metadata
│   └── page.tsx                 # Main portfolio page entry point
├── components/
│   ├── ui/                      # Reusable primitives (Badge, Button, Dialog, Magnetic)
│   ├── navbar.tsx               # Floating responsive navigation bar
│   ├── hero.tsx                 # Hero section with 3D accents & intro
│   ├── hero-background.tsx      # SVG blueprint & ambient radial backgrounds
│   ├── about.tsx                # Engineering philosophy & background statement
│   ├── tech-stack.tsx           # Categorized technology stack with animated icons
│   ├── projects.tsx             # Projects section container with Showcase/Grid switcher
│   ├── project-card.tsx         # Responsive project cards (Showcase & Grid)
│   ├── project-image-carousel.tsx # Interactive carousel & 1080p uncropped Lightbox modal
│   ├── project-modal.tsx        # Case study deep-dive dialog with tabs & specs
│   └── contact.tsx              # Contact footer & social channels
├── data/
│   └── projects.ts              # Detailed project metadata, feature lists & architecture specs
├── documents/
│   ├── Animations.md            # Motion & animation documentation
│   └── Design_documents.md      # Aesthetic & design tokens specification
├── public/
│   ├── profile.png              # Developer portrait
│   └── projects/                # Production screenshots & diagrams for projects
├── next.config.ts               # Next.js configuration (configured image qualities [75, 95])
├── package.json                 # Dependencies & scripts
└── tsconfig.json                # TypeScript configuration
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v20.x` or higher
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RiywSu01/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the development server with Turbopack:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Compile and validate the production bundle:
```bash
npm run build
npm run start
```

---

## 🎨 Design Philosophy

- **Curated Palette:** Warm architectural foundation (`#F5F2F2` / `#FAF8F8`) paired with deep charcoal typography (`#2B2A2A`), cornflower blue (`#5A7ACD`), and apricot accents (`#FEB05D`).
- **Tactile Micro-Interactions:** Magnetic cursor reactions, subtle 3D floating accents, and refined hover elevations.
- **Uncompromised Image Fidelity:** Dedicated lightbox viewing so technical diagrams, UI mockups, and database schemas are displayed crisply without forced cropping.
- **Accessibility & Responsiveness:** Fluid layouts tested across 320px mobile screens up to 4K ultra-wide monitors.

---

## 📬 Contact

Feel free to reach out for collaboration, opportunities, or inquiries:

- **Email:** [supawit.sik@student.mahidol.ac.th](mailto:supawit.sik@student.mahidol.ac.th)
- **LinkedIn:** [linkedin.com/in/supawit-sirikulpiboon-836ba8390](https://www.linkedin.com/in/supawit-sirikulpiboon-836ba8390/)
- **GitHub:** [@RiywSu01](https://github.com/RiywSu01)

---

<div align="center">
  <p>© 2026 Supawit Sirikulpiboon. Built with Next.js 16 & React 19.</p>
</div>
