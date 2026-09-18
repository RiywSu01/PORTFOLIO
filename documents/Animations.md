# Animations Documentation

This document provides a comprehensive breakdown of all animations implemented in the portfolio website, following the requirements specified in [`Design_documents.md`](./Design_documents.md).

---

## Summary of Animations

| # | Animation Name | Provider | Component | Purpose |
|---|----------------|----------|-----------|---------|
| 1 | **Spotlight / Ambient Glow** | **Aceternity UI** | [`components/ui/spotlight.tsx`](./components/ui/spotlight.tsx) | Ambient radial aura in hero section with warm apricot (`#FEB05D`) & cornflower (`#5A7ACD`) tones. |
| 2 | **Magnetic Button** | **Magic UI** | [`components/ui/magnetic.tsx`](./components/ui/magnetic.tsx) | Cursor-attracted tactile spring effect on Hero and Contact CTA buttons. |
| 3 | **Hero Stagger Entrance** | **Motion / Aceternity** | [`components/hero.tsx`](./components/hero.tsx) | Smooth slide-in from top (`y: -30 -> 0`, `opacity: 0 -> 1`) on initial page load with staggered children. |
| 4 | **Scroll-Driven Translucent Fade** | **Motion** | [`components/hero.tsx`](./components/hero.tsx) | Hero section gradually slides up and fades to translucent (`opacity: 0.22`) as user scrolls down, and reverses when scrolling back up. |
| 5 | **Infinite Tech Marquee** | **Magic UI** | [`components/tech-stack.tsx`](./components/tech-stack.tsx) & [`app/globals.css`](./app/globals.css) | Smooth horizontal continuous marquee ticker showcasing all 23 technologies with pause-on-hover. |
| 6 | **Elastic Badge Hover & Blur Sibling** | **anime.js** (v4) | [`components/tech-stack.tsx`](./components/tech-stack.tsx) | Elastic scale pop on hovered technology badge and subtle background blur on sibling badges. |
| 7 | **3D Card Elevation & Ambient Border Glow** | **Aceternity UI** | [`components/project-card.tsx`](./components/project-card.tsx) | Case-study cards feature subtle elevation, dynamic border contrast, and corner blur glow on hover. |
| 8 | **Section-by-Section Snap & Stop** | **anime.js** (v4) | [`components/section-scroll-controller.tsx`](./components/section-scroll-controller.tsx) | Wheel and keyboard gesture controller that smoothly glides and stops at each section with anime.js `outExpo` easing, inspired by `animejs.com`. |
| 9 | **Hero Portrait Showcase & Floating Badges** | **Aceternity UI / Magic UI** | [`components/hero.tsx`](./components/hero.tsx) | Ambient halo aura (`#FEB05D` + `#5A7ACD`), floating idle animation, and glassmorphic micro-badges (`Mahidol ICT` & `Full-Stack Dev`). |
| 10 | **Sequential Typewriter & Streaming Text Reveal** | **Magic UI / Aceternity UI** | [`components/hero.tsx`](./components/hero.tsx) | Multi-stage typewriter sequence ("HELLO, I'M SUPAWIT" -> "Full-Stack Developer" -> bio paragraph stream) with blinking caret and click-to-complete. |
| 11 | **Project Image Carousel, Tactile Slider & Automated Slideshow** | **Magic UI / Motion** | [`components/project-image-carousel.tsx`](./components/project-image-carousel.tsx) | Multi-slide gallery featuring automated cycling (slideshow), pause-on-hover, drag/swipe gestures, interactive scrub timeline track, and play/pause controls. |

Total Animations Added: **11 animations across 3 specialized providers and native Motion primitives**.

---

## Detailed Animation Breakdown

### 1. Aceternity UI — Spotlight / Ambient Glow
* **Provider**: Aceternity UI (inspired pattern)
* **File**: [`components/ui/spotlight.tsx`](./components/ui/spotlight.tsx)
* **Used In**: Hero Section background
* **Code Snippet**:
```tsx
export const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill = "rgba(254, 176, 93, 0.18)",
}) => {
  return (
    <div className={cn("pointer-events-none absolute -top-40 left-0 right-0 h-[600px] w-full overflow-hidden opacity-70", className)}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full blur-[110px]"
        style={{
          background: `radial-gradient(ellipse at center, ${fill} 0%, rgba(90, 122, 205, 0.12) 50%, transparent 80%)`,
        }}
      />
    </div>
  );
};
```
* **How It Works**:
  Renders an elliptical radial gradient that blurs across 110px over a subtle grid background. The center utilizes the warm apricot accent (`rgba(254, 176, 93, 0.18)`) and smoothly dissipates into cool cornflower slate (`rgba(90, 122, 205, 0.12)`).
* **How to Modify**:
  - Adjust blur radius via `blur-[110px]` in `spotlight.tsx`.
  - Pass custom colors to the `fill` prop (e.g. `<Spotlight fill="#FEB05D" />`).

---

### 2. Magic UI — Magnetic Button
* **Provider**: Magic UI
* **File**: [`components/ui/magnetic.tsx`](./components/ui/magnetic.tsx)
* **Used In**: Hero CTA buttons (`[ View Projects ]`, `[ GitHub ↗ ]`) and Contact section buttons (`[ Email Me ]`, `[ Copy Address ]`, `[ GitHub ]`, `[ LinkedIn ]`).
* **Code Snippet**:
```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!ref.current) return;
  const { clientX, clientY } = e;
  const { width, height, left, top } = ref.current.getBoundingClientRect();
  const x = (clientX - (left + width / 2)) * strength;
  const y = (clientY - (top + height / 2)) * strength;
  setPosition({ x, y });
};

<motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={() => setPosition({ x: 0, y: 0 })}
  animate={{ x: position.x, y: position.y }}
  transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.2 }}
>
  {children}
</motion.div>
```
* **How It Works**:
  Tracks pointer offset relative to the element center and computes a displacement vector multiplied by `strength`. Framer Motion animates the target toward the cursor with spring physics (`stiffness: 250`, `damping: 15`). On mouse leave, the spring returns cleanly to `(0, 0)`.
* **How to Modify**:
  - Change magnetic pull distance by adjusting the `strength` prop (default is `0.25`, increase to `0.4` for stronger attraction).
  - Adjust spring responsiveness by changing `stiffness` and `damping`.

---

### 3. Motion — Hero Entrance Animation (Fade & Slide Down)
* **Provider**: Motion / Aceternity Stagger
* **File**: [`components/hero.tsx`](./components/hero.tsx)
* **Used In**: Initial page load of Hero elements.
* **Code Snippet**:
```tsx
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
```
* **How It Works**:
  When the page loads, the container triggers staggered entrance animations for each child element (badge -> heading -> role -> description -> buttons -> stats). Each element translates from `-30px` down to `0px` while fading from `0%` to `100%` opacity.
* **How to Modify**:
  - Adjust entrance speed via `duration: 0.7`.
  - Adjust stagger delay between elements in `staggerChildren: 0.12`.

---

### 4. Motion — Scroll-Driven Translucent Fade & Slide
* **Provider**: Motion (`useScroll`, `useTransform`)
* **File**: [`components/hero.tsx`](./components/hero.tsx)
* **Used In**: Hero section scroll behavior.
* **Code Snippet**:
```tsx
const { scrollY } = useScroll();
const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.22]);
const heroTranslateY = useTransform(scrollY, [0, 500], [0, -70]);
const heroScale = useTransform(scrollY, [0, 500], [1, 0.97]);

<motion.div
  style={{
    opacity: heroOpacity,
    y: heroTranslateY,
    scale: heroScale,
  }}
>
```
* **How It Works**:
  Ties scroll position directly to CSS properties without performance-heavy event listeners. As the user scrolls from `0px` to `500px`:
  - Opacity transitions from `1.0` down to `0.22` (remains slightly translucent as specified in Rule 133).
  - Vertical offset translates up by `-70px`.
  - Scale slightly condenses to `0.97`.
  - When scrolling back up, it reverses smoothly.
* **How to Modify**:
  - To change minimum translucent opacity, change `0.22` in `[1, 0.22]`.
  - To adjust the scroll distance threshold, change `[0, 500]`.

---

### 5. Magic UI — Infinite Smooth Marquee
* **Provider**: Magic UI (Marquee pattern)
* **File**: [`components/tech-stack.tsx`](./components/tech-stack.tsx) & [`app/globals.css`](./app/globals.css)
* **Used In**: Technologies section for all 23 stack technologies.
* **Code Snippet**:
```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
```
* **How It Works**:
  Creates an infinite bidirectional continuous loop. Row 1 moves left-to-right, while Row 2 moves in reverse. Hovering pauses the animation so users can comfortably interact with individual technologies.
* **How to Modify**:
  - Change speed by altering `35s` in `.animate-marquee` (e.g. `25s` for faster, `45s` for slower).

---

### 6. anime.js — Elastic Badge Hover & Sibling Focus
* **Provider**: anime.js (v4)
* **File**: [`components/tech-stack.tsx`](./components/tech-stack.tsx)
* **Used In**: Hovering any technology badge in the marquee.
* **Code Snippet**:
```tsx
const handleBadgeHover = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  animate(target, {
    scale: 1.08,
    translateY: -3,
    duration: 300,
    ease: "outElastic(1, .6)",
  });

  const parent = target.parentElement;
  if (parent) {
    const siblings = Array.from(parent.children).filter((el) => el !== target);
    animate(siblings, {
      opacity: 0.55,
      duration: 250,
      ease: "outQuad",
    });
  }
};
```
* **How It Works**:
  On mouse enter, anime.js triggers an elastic spring scaling up the badge (`scale: 1.08`, `translateY: -3px`) using `outElastic(1, .6)`. Simultaneously, all sibling badges softly reduce opacity to `55%`, drawing immediate focal attention to the active technology. On mouse leave, it returns smoothly to normal.
* **How to Modify**:
  - Adjust elastic bounce intensity by tweaking `outElastic(bounciness, elasticity)`.
  - Adjust sibling opacity level in `opacity: 0.55`.

---

### 7. Aceternity UI — 3D Card Elevation & Ambient Border Glow
* **Provider**: Aceternity UI (Card Hover / Glare pattern)
* **File**: [`components/project-card.tsx`](./components/project-card.tsx)
* **Used In**: Case-study project cards.
* **Code Snippet**:
```tsx
<div className="group relative flex flex-col justify-between rounded-2xl border border-[#2B2A2A]/12 bg-[#FAF8F8] p-5 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-[#2B2A2A]/25 hover:-translate-y-1 cursor-pointer overflow-hidden">
  <div
    className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
    style={{ backgroundColor: project.accentColor }}
  />
  ...
</div>
```
* **How It Works**:
  Combines smooth CSS transforms (`-translate-y-1`) and shadow expansion with an absolute radial blurred light beam tinted with the project's accent color (`#FEB05D` or `#5A7ACD`), creating an elevated glassmorphism feel when hovered.
* **How to Modify**:
  - Adjust elevation height via `hover:-translate-y-1` or `hover:-translate-y-2`.
  - Adjust ambient corner glow strength via `group-hover:opacity-40`.

---

### 8. anime.js — Section-by-Section Snap & Stop Scroll
* **Provider**: anime.js (v4)
* **File**: [`components/section-scroll-controller.tsx`](./components/section-scroll-controller.tsx)
* **Used In**: Whole-page scroll navigation across `Home`, `Skills`, `Projects`, `About`, and `Contact`.
* **Code Snippet**:
```tsx
const scrollToSection = useCallback((index: number) => {
  if (index < 0 || index >= SECTIONS.length) return;
  const targetSection = document.getElementById(SECTIONS[index].id);
  if (!targetSection) return;

  isAnimatingRef.current = true;
  setActiveIndex(index);

  const targetTop = targetSection.getBoundingClientRect().top + window.scrollY;

  const scrollObj = { y: window.scrollY };
  animate(scrollObj, {
    y: targetTop,
    duration: 800,
    ease: "outExpo",
    onUpdate: () => {
      window.scrollTo(0, scrollObj.y);
    },
    onComplete: () => {
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 150);
    },
  });
}, []);
```
* **How It Works**:
  Intercepts wheel and keyboard navigation gestures. When a directional scroll intent is detected (scrolling down or up), it computes the target section and uses **anime.js v4 `animate`** with `outExpo` easing to smoothly glide the viewport directly to `targetSection.offsetTop`. While animating, it locks additional wheel events for 900ms, preventing rapid mouse wheel or trackpad momentum from overshooting or skipping sections.
* **How to Modify**:
  - **Change the stop point / landing offset**: Adjust the `offset` property in the `SECTIONS` array in `components/section-scroll-controller.tsx` (e.g. `offset: -64` to leave 64px space for the navbar, `offset: -20` to stop slightly higher, or positive `offset: +40` to land lower).
  - **Adjust glide speed**: Change `duration: 800` in `animate(...)` (e.g. `600` for snappy, `1000` for slower cinematic glide).
  - **Adjust lock debounce time**: Change `now - lastScrollTimeRef.current < 900` (controls how long subsequent wheel events are ignored).
  - **Change easing curve**: Modify `ease: "outExpo"` or `"outCubic"`.

---

### 9. Aceternity UI & Magic UI — Hero Stadium Capsule Portal & Floating 3D Tech Elements
* **Provider**: Aceternity UI (Ambient Glow & Portal Halo) & Magic UI (3D Floating Physics & Harmonious Hover)
* **File**: [`components/hero.tsx`](./components/hero.tsx)
* **Used In**: Hero section portrait showcase and surrounding 3D decorative tech geometry (3D Faceted Pyramid, 3D Helix Spiral, 3D Mini Computer, and 3D Toroid).
* **Code Snippet**:
```tsx
{/* 1. Portal Ambient Halo Glow */}
<div className="absolute -inset-6 sm:-inset-8 rounded-[150px] bg-gradient-to-tr from-[#5A7ACD]/30 via-[#FAF8F8]/40 to-[#FEB05D]/28 blur-2xl -z-10 pointer-events-none" />

{/* 2. Double-Layer Glowing Neon Rim Stadium Frame */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="relative p-2.5 sm:p-3 rounded-[130px] sm:rounded-[150px] bg-gradient-to-b from-[#5A7ACD]/40 via-white to-[#FEB05D]/35 border border-[#5A7ACD]/30 shadow-xl shadow-[#5A7ACD]/15"
>
  <div className="relative w-[210px] h-[290px] sm:w-[260px] sm:h-[360px] md:w-[290px] md:h-[400px] min-[1400px]:w-[320px] min-[1400px]:h-[440px] rounded-[120px] sm:rounded-[140px] overflow-hidden">
    <Image src="/profile.png" alt="Supawit - Full-Stack Developer" fill priority className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out" />
  </div>
</motion.div>

{/* 3. Floating 3D Decorative Tech Elements */}
<Pyramid3D />   {/* Top-Left 3D Cyan/Cornflower Faceted Tetrahedron */}
<Spiral3D />    {/* Bottom-Right 3D Helical Coil Spring */}
<Computer3D />  {/* Bottom-Left 3D Isometric Mini Computer */}
<Torus3D />     {/* Top-Right 3D Geometric Toroid Ring */}
```
* **How It Works**:
  Renders the developer profile photo within a stadium/capsule-shaped portal (`rounded-[140px]`) wrapped with a dual-layer neon glow ring (`from-[#5A7ACD]/40 via-white to-[#FEB05D]/35`). Anchored around the perimeter of the portal are four custom 3D floating decorative elements that oscillate on independent harmonic cycles:
  1. **3D Faceted Pyramid / Tetrahedron** (Top-Left): 3-face light-shaded pyramid with specular edge highlights hovering at `duration: 6.5s`.
  2. **3D Coiled Spring / Helix** (Bottom-Right): Multi-loop gradient helix spring inspired directly by the reference image with specular light reflections.
  3. **3D Isometric Mini Computer** (Bottom-Left): Isometric laptop with glowing terminal display and code prompt lines.
  4. **3D Toroid Ring** (Top-Right): Translucent warm apricot accent ring.
* **How to Modify**:
  - **Adjust float amplitude/speed**: Change `y: [0, -14, 0]` or `duration: 6.5` inside each 3D component in `components/hero.tsx`.
  - **Adjust portal size**: Modify `w-[210px] h-[290px] ... min-[1400px]:w-[320px] min-[1400px]:h-[440px]`.
  - **Change rim colors**: Tweak `from-[#5A7ACD]/40 ... to-[#FEB05D]/35` in the stadium container.

---

### 10. Magic UI & anime.js — Animated Mouse "Scroll Down" Indicator
* **Provider**: Magic UI (Bouncing Wheel Particle) & anime.js (One-by-One Section Gliding)
* **File**: [`components/hero.tsx`](./components/hero.tsx)
* **Used In**: Bottom-left corner of the Hero Card.
* **Code Snippet**:
```tsx
<button onClick={handleScrollDown} className="group inline-flex items-center gap-3 text-xs font-mono tracking-wider uppercase text-[#2B2A2A]/60 hover:text-[#2B2A2A] transition-colors cursor-pointer">
  <span className="relative flex h-7 w-4 rounded-full border-2 border-[#2B2A2A]/40 group-hover:border-[#5A7ACD] items-start justify-center p-1 transition-colors">
    <motion.span
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      className="h-1.5 w-1 rounded-full bg-[#5A7ACD]"
    />
  </span>
  <span className="font-semibold">Scroll down</span>
</button>
```
* **How It Works**:
  Renders a tactile pill-shaped mouse outline with an active animated wheel dot sliding smoothly downwards on an infinite loop. Clicking it triggers smooth scrolling down to the Engineering Philosophy section (`#about`).
* **How to Modify**:
  - Adjust wheel bounce cycle via `duration: 1.6` or `y: [0, 8, 0]`.
  - Modify wheel accent color via `bg-[#5A7ACD]`.
* **Provider**: Magic UI (Typewriter Animation) & Aceternity UI (Text Generate Effect)
* **File**: [`components/hero.tsx`](./components/hero.tsx)
* **Used In**: Hero section typography — sequentially typing "HELLO, I'M SUPAWIT", then "Full-Stack Developer", then streaming the bio paragraph.
* **Code Snippet**:
```tsx
// Stage 1: Line 1 character typing
if (stage === 1) {
  if (line1Chars < LINE_1.length) {
    timer = setTimeout(() => setLine1Chars(prev => prev + 1), 36);
  } else {
    timer = setTimeout(() => setStage(2), 200);
  }
}
// Stage 2: Line 2 character typing
if (stage === 2) {
  if (line2Chars < LINE_2.length) {
    timer = setTimeout(() => setLine2Chars(prev => prev + 1), 32);
  } else {
    timer = setTimeout(() => setStage(3), 200);
  }
}
// Stage 3: Rapid paragraph streaming
if (stage === 3) {
  if (line3Chars < LINE_3.length) {
    timer = setTimeout(() => setLine3Chars(prev => Math.min(prev + 4, LINE_3.length)), 16);
  } else {
    setStage(4);
  }
}
```
* **How It Works**:
  Executes an orchestrated 3-stage typewriter reveal:
  1. **Greeting**: Types `"HELLO, I'M SUPAWIT"` at 36ms/char, applying the apricot underline decoration on `"SUPAWIT"` with an active blinking cursor.
  2. **Role Subtitle**: Pauses 200ms, transfers cursor to the role line, and types `"Full-Stack Developer"` at 32ms/char with a cornflower caret.
  3. **Bio Description**: Pauses 200ms, then streams the 618-character bio paragraph rapidly (4 chars per frame ~ 250 chars/sec) to keep reader engagement high without artificial delays.
  4. **Accessibility & SEO**: Accessible `sr-only` text is provided so screen readers and search engine crawlers immediately ingest the full text. Clicking anywhere on the text block triggers `completeTyping()` to reveal all text immediately. Respects `prefers-reduced-motion`.
* **How to Modify**:
  - **Change typing speeds**: Adjust the timeout delays (e.g. `36` for line 1, `32` for line 2, `16` with step `4` for line 3).
  - **Adjust stage pause duration**: Change `setTimeout(() => setStage(...), 200)` to a longer or shorter pause.
  - **Change caret colors**: Modify `bg-[#FEB05D]` (apricot) or `bg-[#5A7ACD]` (cornflower) in the cursor spans.

---

### 11. Magic UI / Motion — Project Image Carousel, Tactile Slider & Automated Slideshow
* **Provider**: Magic UI / Motion (Framer Motion `AnimatePresence` & `drag="x"`)
* **File**: [`components/project-image-carousel.tsx`](./components/project-image-carousel.tsx)
* **Used In**:
  - Project Cards in the Projects Grid: [`components/project-card.tsx`](./components/project-card.tsx)
  - Full Project Detail Modal: [`components/project-modal.tsx`](./components/project-modal.tsx)
* **Code Snippet**:
```tsx
// 1. Automated Slideshow Timer with Pause-on-Hover
useEffect(() => {
  if (!isMultiSlide || !isPlaying || isHovered || isDragging) return;
  const timer = setInterval(() => {
    paginate(1);
  }, autoPlayInterval);
  return () => clearInterval(timer);
}, [isMultiSlide, isPlaying, isHovered, isDragging, paginate, autoPlayInterval, currentIndex]);

// 2. Tactile Drag / Swipe Gestures on Mobile & Desktop
<motion.div
  key={currentIndex}
  custom={direction}
  variants={slideVariants}
  initial="enter"
  animate="center"
  exit="exit"
  drag={isMultiSlide ? "x" : false}
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.4}
  onDragStart={() => setIsDragging(true)}
  onDragEnd={handleDragEnd}
  className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
>
```
* **How It Works**:
  1. **Automated Slideshow (Auto-Cycling)**: Automatically rotates sequentially through pictures every 3,500ms when multiple images exist. Features **Pause on Hover** so visitors can inspect details without interruptions, plus a dedicated **Auto / Paused** toggle button with `<Play>` and `<Pause>` states.
  2. **Tactile Drag & Swipe Slider**: Users can drag left/right with mouse or finger (`drag="x"`, `dragElastic: 0.4`). Crossing the swipe threshold (`offset.x > 35px` or `velocity.x > 200px/s`) smoothly triggers spring page transitions (`stiffness: 320, damping: 32`).
  3. **Segmented Scrub Timeline Bar**: At the bottom of the card, an interactive segmented track shows past slides filled with white, and the active slide filling from 0% to 100% via a gradient progress bar (`from-[#FEB05D] to-[#5A7ACD]`). Clicking any segment scrubs directly to that slide.
  4. **Demo Preview Mode**: For projects with empty images (`images: []`), visitors can click *"Preview Slideshow & Slider"* to immediately preview the interactive slideshow with built-in high-resolution SVG mockups.
* **How to Modify**:
  - **Adjust auto-play interval**: Change `autoPlayInterval` prop (default `3500` ms) on `<ProjectImageCarousel />`.
  - **Disable auto-play by default**: Pass `initialAutoPlay={false}` to require manual user interaction.
  - **Add custom project pictures**: Place files in [`public/projects/`](./public/projects/) and add their relative paths to [`data/projects.ts`](./data/projects.ts) under the project's `images` array.
  - **Adjust swipe sensitivity**: Tweak `swipeThreshold` (default `35px`) or `velocityThreshold` (default `200`) in `handleDragEnd`.


