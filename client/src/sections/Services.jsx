import ServiceCard from "../components/ServiceCard";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

function Services() {
  const services = [
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning for healthy teeth.",
      image: service1,
    },
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with whitening treatment.",
      image: service2,
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth.",
      image: service3,
    },

  {
      title: "Teeth Cleaning",
      description: "Professional cleaning for healthy teeth.",
      image: service1,
    },
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with whitening treatment.",
      image: service2,
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth.",
      image: service3,
    },


  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Quality dental services for your smile.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;