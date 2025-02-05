'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import {Project} from '@/types/project'
import Image from 'next/image'
import { FormEvent } from 'react';

// Theme Toggle Component
const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            ABC
          </span>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className="px-4 py-2 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-gray-700 dark:text-gray-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => (
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

// About Section
const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I am a dedicated Software Developer with extensive experience in web technologies,
          specializing in creating robust and scalable web applications. My expertise lies in
          crafting efficient solutions that meet complex business requirements.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          With a strong background in modern web frameworks and a passion for continuous learning,
          I transform innovative ideas into functional digital experiences.
        </p>
      </div>
    </div>
  </section>
);

// Services Section
const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and performant web applications using modern technologies.',
      icon: '💻'
    },
    {
      title: 'Frontend Design',
      description: 'Developing intuitive and engaging user interfaces with clean, modern design.',
      icon: '🎨'
    },
    {
      title: 'Backend Solutions',
      description: 'Building robust server-side architectures and APIs.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-6 transition-transform hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Freelance & Outsourcing Projects',
      period: '2021 - Present',
      description: [
        'Developed web applications using modern frameworks',
        'Collaborated with international clients',
        'Implemented scalable and efficient solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
              <p className="text-primary font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'GraphQL', 'MongoDB']
    },
    {
      name: 'Tools',
      skills: ['Git', 'Docker', 'Webpack', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, secure payment processing, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/api/placeholder/400/250'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team functionality.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      imageUrl: '/api/placeholder/400/250'
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with customizable widgets and real-time data updates.',
      technologies: ['React', 'D3.js', 'Firebase'],
      imageUrl: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && selectedProject.imageUrl && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              width={200}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} ABC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
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