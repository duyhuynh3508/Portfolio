const ExperienceSection = () => {
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

export default ExperienceSection;