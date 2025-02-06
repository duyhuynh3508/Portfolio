const Services = () => {
    const services = [
      {
        title: 'Web Development',
        description: 'Creating responsive and performant web applications using modern technologies.',
        icon: '💻'
      },
      {
        title: 'Frontend Design',
        description: 'Developing intuitive and engaging user interfaces with clean, modern design.',
        icon: '🎨'
      },
      {
        title: 'Backend Solutions',
        description: 'Building robust server-side architectures and APIs.',
        icon: '⚙️'
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-6 transition-transform hover:scale-110">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
export default Services;