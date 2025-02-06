import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-900 py-12"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-6">
          {[
            { icon: <FaGithub size={24} />, href: '#' },
            { icon: <FaLinkedin size={24} />, href: '#' },
            { icon: <FaEnvelope size={24} />, href: '#' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} ABC. All rights reserved.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
