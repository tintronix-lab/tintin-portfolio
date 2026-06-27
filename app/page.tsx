import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseGlow } from "@/components/MouseGlow";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { BackToTop } from "@/components/BackToTop";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { CVSection } from "@/components/sections/CVSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <AnimatedBackground />
      <MouseGlow />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Testimonials />
        <CVSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
