'use client'
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Experience from "@/components/home/Experience";
import Skills from '@/components/home/Skills';
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}