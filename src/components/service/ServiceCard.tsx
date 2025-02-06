import { motion } from 'framer-motion';
import Image from 'next/image';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex justify-center mb-4">
        <Image
          src={service.iconURL}
          alt={service.title}
          width={60}
          height={60}
          className="transition-transform transform hover:scale-110"
        />
      </div>

      <h3 className="text-lg font-semibold text-center mb-3 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-center text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
    </motion.div>
  );
}

