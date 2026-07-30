import React from "react";
import ServiceCard from "../components/ServiceCard";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Teeth Cleaning",
    description: "Professional cleaning and polishing for long-term oral health.",
    image: service1,
  },
  {
    id: 2,
    title: "Teeth Whitening",
    description: "Safe and effective whitening treatments to brighten your smile.",
    image: service2,
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Durable, natural-looking permanent solution for missing teeth.",
    image: service3,
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Modern braces and clear aligners to align your teeth perfectly.",
    image: service1, // Replace with service4 when available
  },
  {
    id: 5,
    title: "Root Canal Therapy",
    description: "Pain-free treatment designed to save damaged or infected teeth.",
    image: service2, // Replace with service5 when available
  },
  {
    id: 6,
    title: "General Checkup",
    description: "Comprehensive oral exams and digital X-rays for total dental care.",
    image: service3, // Replace with service6 when available
  },
];

function Services() {
  return (
    <section className="py-16 md:py-24 px-6 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-stone-800 text-amber-200/80 border border-amber-200/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-100">
            Comprehensive Dental Care
          </h2>
          <p className="text-stone-300 mt-4 text-base sm:text-lg leading-relaxed">
            Quality dental services tailored to keep your teeth healthy and your smile confident.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
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