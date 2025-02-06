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

export default Skills;