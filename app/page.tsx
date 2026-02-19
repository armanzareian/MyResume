import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import ResearchSection from "@/components/Research/ResearchSection";
import EducationSection from "@/components/Education/EducationSection";
import PublicationsSection from "@/components/Publications/PublicationsSection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ResearchSection />
        <EducationSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </>
  );
}
