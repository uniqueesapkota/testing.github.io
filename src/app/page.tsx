
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-100">
          <ProjectGallery />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200">
          <AboutMeSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-300">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
