'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20
        bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Optional background overlay */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.03] dark:bg-grid-white/[0.02]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Software Engineer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              <Typewriter
                words={['Building scalable solutions...', 'Crafting elegant, efficient code...', 'Creating impactful digital experiences...']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-1 max-w-md"
          >
            <div className="relative z-10">
              <Image
                src="/meme.png"  // Replace with your actual profile image
                alt="Duy Huynh"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Optional gradient glow effect for profile image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
