import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-left space-y-6"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Hi, I'm Duy Huynh, a Senior Software Engineer with over 4 years of experience in web and 1 year of experience mobile application development. I specialize in building scalable and robust solutions using technologies like React, Angular, Next.js, C#, and React Native. My journey in software development spans various industries, including e-commerce, MDM, CRM systems, and insurance projects.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I am passionate about continuous learning and applying best practices such as SOLID principles, Clean Code, and Agile methodologies. Having worked with teams across different time zones, including in Australia, the US, and India, I have developed a strong ability to collaborate and adapt to diverse challenges.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Currently, I am a part of TMA Solutions, where I lead and contribute to various web and mobile development projects. I'm always excited about creating impactful software that provides real value to users and businesses alike.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
