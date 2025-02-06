import { useState } from 'react';
import Image from 'next/image';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: '1',
      title: 'MDM (Master Data Management)',
      description: 'Improve the quality and consistency of spare parts, asset, raw materials, services, and finished goods data across the enterprise.',
      responsibilities: [
        'Discussed with BA and customer service team to clarify requirements.',
        'Provided technical support and solutions for developers.',
        'Worked with QA to develop a test plan aligning with project goals.',
        'Assigned tasks and performed code reviews following Scrum planning.',
        'Built and deployed applications using Azure DevOps.'
      ],
      technologies: ['C#', '.NET Framework', 'Angular', 'Microsoft SQL Server', 'Microsoft Azure'],
      imageUrl: '/mdm.png'
    },
    {
      id: '2',
      title: 'NFT Gallery',
      description: 'Developed a platform for creating and trading NFT artwork using blockchain technologies.',
      responsibilities: [
        'Implemented Web3 functionalities for minting, buying, and selling NFTs.',
        'Integrated MetaMask authentication for wallet interaction.',
        'Handled payments with Stripe.js for NFT purchases.'
      ],
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Web3.js', 'MetaMask', 'Stripe.js'],
      imageUrl: '/nft.jpeg'
    },
    {
      id: '3',
      title: 'Community CRM Management Platform',
      description: 'A CRM platform to assist service providers and health professionals in supporting people with disabilities.',
      responsibilities: [
        'Collaborated with BA and customer service team to clarify requirements.',
        'Implemented user stories and fixed bugs.',
        'Supported deployment and maintenance.'
      ],
      technologies: ['ASP.NET Core C#', 'ASP.NET Web API', 'React.js', 'JavaScript', 'MS SQL Server', 'GIT', 'Jira', 'Azure DevOps'],
      imageUrl: '/crm.png'
    },
    {
      id: '4',
      title: 'Education Platform',
      description: 'Developed an education platform for online assessments and learning solutions.',
      responsibilities: [
        'Clarified requirements with customers.',
        'Implemented new features and fixed bugs.',
        'Participated in daily sync-up meetings with the international team.'
      ],
      technologies: ['ASP.NET (C#)', 'Restful API', 'Razor', 'JavaScript', 'HTML/CSS', 'MS SQL Server', 'GIT', 'Jira', 'Azure', 'TeamCity', 'Octopus'],
      imageUrl: '/education.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
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
            className="bg-white dark:bg-gray-800 max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
            </div>
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

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Responsibilities</h3>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  {selectedProject.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
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

export default ProjectsSection;
