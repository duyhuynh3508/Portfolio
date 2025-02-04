

'use client'
// src/components/sections/Hero.tsx
import Image from 'next/image'
import ThemeToggle from '@/components/layout/ThemeToggle'

function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen py-20">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/profile-image.jpg"
            alt="Duy Huynh"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Duy Huynh
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Passionate Software Developer | Web Technology Specialist | Creating Innovative Digital Solutions
        </p>
      </div>
    </section>
  )
}

// src/components/sections/About.tsx
function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
      <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 space-y-6">
        <p>
          I am a dedicated Software Developer with extensive experience in web technologies,
          specializing in creating robust and scalable web applications. My expertise lies in
          crafting efficient solutions that meet complex business requirements.
        </p>
        <p>
          With a strong background in modern web frameworks and a passion for continuous learning,
          I transform innovative ideas into functional digital experiences.
        </p>
      </div>
    </section>
  )
}

// src/components/sections/Services.tsx
function Services() {
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
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// src/components/sections/Experience.tsx
function Experience() {
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
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-primary mb-2">{exp.company}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// src/components/sections/Skills.tsx
function Skills() {
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
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">{category.name}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// src/components/sections/Projects.tsx

import { useState } from 'react'
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced features.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/projects/ecommerce.jpg'
  },
  // Add more projects
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 max-w-2xl w-full p-8 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              width={800}
              height={400}
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// src/components/sections/Contact.tsx
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

// src/components/layout/Navigation.tsx

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-primary">DH</div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '×' : '☰'}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}