import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'SCSS']
    },
    {
      name: 'Backend',
      skills: ['C#', '.NET', 'Node.js', 'Express', 'GraphQL', 'MongoDB', 'SQL']
    },
    {
      name: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Webpack', 'Microsoft Azure', 'Figma', 'Jira', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium transition-transform"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
