import { motion } from 'framer-motion';
import ServiceCard from '@/components/service/ServiceCard';
import serviceItems from '@/lib/constants/services';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
    >
      Services
    </motion.h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceItems.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ServicesSection;
