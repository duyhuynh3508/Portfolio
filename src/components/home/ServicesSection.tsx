import ServiceCard from '@/components/service/ServiceCard';
import serviceItems from '@/lib/constants/services';

const ServicesSection = () => {  
    return (
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <ServiceCard key={index} service={service}/>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ServicesSection;