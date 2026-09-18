import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SectionScrollController } from "@/components/section-scroll-controller";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2F2] text-[#2B2A2A]">
      <SectionScrollController />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
