import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              {['name', 'email', 'message'].map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 outline-none"
                  />
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
