//src/app/page.tsx
'use client'
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import SkillsSection from '@/components/home/SkillsSection';
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}