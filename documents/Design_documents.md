# Structure of the website

# my github is "https://github.com/RiywSu01"

```
app/
├── page.tsx
├── projects/
│
components/
├── navbar.tsx
├── hero.tsx
├── tech-stack.tsx
├── projects.tsx
├── project-card.tsx
├── project-modal.tsx
├── contact.tsx
└── ui/
```

# RULES
1. This website is responsive, it should work on all devices.
2. This website design main stack tailwindcss and shadcn ui, with additional is animejs, Aceternity UI and Magic UI for additional animation that i want.
3. if use any animation that come from animejs, Aceternity UI and Magic UI. you MUST create a ./Animations.md that explain the animation you used like what the provider name (animejs, Aceternity UI, Magic UI),animation name it is, code you used, how it works, how many animation you added, how can i modify it.
4. shadcn/ui should be the foundation. you wouldn't replace shadcn with Aceternity or Magic UI.
- 

```
                    YOUR WEBSITE

                       ↓

                 shadcn/ui
              basic UI foundation
                       ↓
        ┌──────────────┴──────────────┐
        ↓                             ↓
   Aceternity UI                 Magic UI
   complex effects               animations
        ↓                             ↓
        └──────────────┬──────────────┘
                       ↓
                  Tailwind CSS
```
5. stack that use in this website
```
Next.js
TypeScript
Tailwind CSS
shadcn/ui
Aceternity UI
Magic UI
Lucide Icons
Motion
```
6. Don't turn the portfolio into an animation showcase. The design should be clean, modern, and professional. It should have a good balance of animations and content.


# Structure of the page:
```
┌─────────────────────────────────────────────────────────────┐
│ YOUR NAME     Projects   About   Skills        GitHub      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   HELLO, I'M YOUR NAME                                      │
│                                                             │
│   Full-Stack Developer                                      │
│   Building practical web experiences with modern            │
│   technologies.                                             │
│                                                             │
│   [ View Projects ]  [ GitHub ↗ ]                           │
│                                                             │
│                   subtle animated background                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   TECHNOLOGIES                                              │
│   React · Next.js · TypeScript · Node.js · SQL ...         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   SELECTED PROJECTS                                         │
│                                                             │
│   ┌───────────────────────────────┐                          │
│   │                               │                          │
│   │       PROJECT SCREENSHOT      │                          │
│   │                               │                          │
│   └───────────────────────────────┘                          │
│   Project name                                               │
│   Description                                                │
│   React · Node · MySQL                [ GitHub ↗ ]          │
│                                                             │
│   ┌───────────────┐  ┌───────────────┐                      │
│   │   screenshot  │  │   screenshot  │                      │
│   │               │  │               │                      │
│   └───────────────┘  └───────────────┘                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     LET'S CONNECT                           │
│                                                             │
│            Have a project or opportunity?                    │
│                                                             │
│            [ Email Me ] [ GitHub ] [ LinkedIn ]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                         © 2026                               │
└─────────────────────────────────────────────────────────────┘
```

# Overall concept Design

Color theme: F5F2F2, FEB05D, 5A7ACD, 2B2A2A
Main color: F5F2F2

# Main Design of the website:
- Thin borders
- Large typography
- Subtle grid/noise background
- Smooth scroll animations
- Very little unnecessary decoration

# Navbar
- sticky
- backdrop blur
- translucent background
- thin bottom border
- active navigation indicator
- mobile hamburger menu

# Hero section
This is the most important part.
i want like went website finish load it have animation like element on Hero section is fade in and slide in from top to there natural position with smooth speed and went user scroll down the hero section should be fade out and slide up to top. But it not fade out completely, it should be like it is still there but translucent and vice versa went user scroll up it fade in and slide down to there natural position. 
** Additional ** I want you to implement some animation (1-3) in the hero section to make it look interesting&cool choose from the animejs, Aceternity UI and Magic UI that i mentioned in the RULES. 

- The grid background should be very subtle.
- The text should be large and easy to read.
- The buttons should be easy to click and have a smooth hover effect.

# Technologies
- I want you to applied marquee animation on this section, each technology should have a space between each other and should be smooth.  These are my technologies (TypeScript, JavaScript, HTML/CSS, SQL, Python, React, Next.js, Tailwind CSS, Node.js, ExpressJS, NestJS, PostgreSQL, MySQL, Prisma ORM, Redis, Docker, Nginx, Clerk, Jest, Supertest, Git, GitHub, Figma.) You can also add 1-2 animation that come from animejs on it to make it look more interesting like blur in blur out. I want the animation should be very smooth, not too fast and not too slow. 

# Projects
- case-study-style project cards.

### Structure of the cards
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    PROJECT SCREENSHOT                      │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ browser bar                                  ↗ GitHub │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │                                                      │  │
│  │              screenshot of your project              │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  Food Recognition & Nutrition Platform                     │
│                                                            │
│  A web application combining image recognition with        │
│  nutritional data retrieval.                               │
│                                                            │
│  React   Node.js   Gemini   FatSecret API                  │
│                                                            │
│  [ View Repository ↗ ]                                     │
└────────────────────────────────────────────────────────────┘
```


For the screenshot, I would not just put an image inside a rectangular card. Instead, make it look like a browser window:
```
● ● ●     your-project.com                     ↗ GitHub
────────────────────────────────────────────────
                    screenshot
────────────────────────────────────────────────
```

For each project:
```
              MAIN SCREENSHOT
┌──────────────────────────────────────────┐
│                                          │
│                 image                    │
│                                          │
└──────────────────────────────────────────┘

        ┌────────────┐ ┌────────────┐
        │ screenshot │ │ screenshot │
        └────────────┘ └────────────┘
```
Then clicking the card could open a project detail modal instead of taking them directly somewhere.
Inside:
```
PROJECT NAME

Overview
────────────────────

What I built
...

Key features
...

Technologies
...

Architecture
...

[ GitHub Repository ↗ ]
```

# Consider or sugggets animation for design:
- Aurora Background
- Background Beams
- Sparkles
- Text Generate Effect
- Bento Grid
- 3D Card Effect
- Card Hover Effect
- Layout Grid
- Marquee
- Marquee Cards
- Magnetic Button
- Sticky Card
- Glare Hover Effect
- Moving Border
- Spotlight
- Infinite Moving Cards