import Image from 'next/image';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
const HeroSection = () => (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-gray-900/[0.03] dark:bg-grid-white/[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Software Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Passionate about crafting exceptional digital experiences through innovative solutions and clean code.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Projects
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative flex-1 max-w-md">
            <div className="relative z-10">
              <Image
                src="/profile-image.jpg"
                alt="Duy Huynh"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
          </div>
        </div>
  
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 dark:text-gray-500">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
export default HeroSection;