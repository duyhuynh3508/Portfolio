import { Project } from '@/types/project'
import ProjectCard from '../projects/ProjectCard'

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/projects/ecommerce.jpg',
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'A collaborative task management system for teams',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    imageUrl: '/projects/task-management.jpg',
  },
  // Add more featured projects
];
export default function FeaturedProjects() {
    return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="text-primary hover:text-blue-600 font-medium"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>
    )
  }