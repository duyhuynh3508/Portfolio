import ProjectGrid from '@/components/projects/ProjectGrid'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/shared/SectionHeading'
import { Project } from '@/types/project'

// You can replace these with your actual projects
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring product management, cart functionality, and secure payments.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/projects/ecommerce.jpg',
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'A collaborative task management system for teams with real-time updates and project tracking capabilities.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    imageUrl: '/projects/task-management.jpg',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard providing insights and visualization for business metrics.',
    technologies: ['React', 'D3.js', 'Node.js', 'MySQL'],
    imageUrl: '/projects/analytics.jpg',
  },
  // Add more projects based on your experience
];

export default function ProjectsPage() {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
        <Container>
          <SectionHeading
            title="Projects"
            subtitle="A collection of projects I've worked on as an outsourcing developer. These demonstrate my expertise in various technologies and problem-solving abilities."
            centered
          />
          <ProjectGrid projects={projects} />
        </Container>
      </div>
    )
  }