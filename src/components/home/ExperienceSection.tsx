import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TMA Solutions',
    period: 'July 2021 – Present',
    description: [
      'Led development of web and mobile applications using React, Node.js, and .NET.',
      'Collaborated with international clients to deliver scalable solutions.',
      'Worked on e-commerce platforms, CRM systems, and insurance applications.',
      'Applied Agile methodologies to improve project workflows and deadlines.',
      'Mentored junior developers and contributed to code reviews.',
    ]
  },
  {
    title: 'Freelance Software Developer',
    company: 'Freelancer & Outsourcing Projects',
    period: 'February 2020 – June 2021',
    description: [
      'Developed various applications using modern frameworks like React and Next.js.',
      'Implemented real-time features and optimized performance.',
      'Worked on projects involving task management apps, e-commerce platforms, and custom software solutions.',
      'Interacted directly with clients to understand business needs and deliver technical solutions.',
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
              <p className="text-primary font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
