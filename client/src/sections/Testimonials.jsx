 import React from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "John Smith",
    role: "Teeth Whitening Patient",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Excellent service and friendly staff! The teeth whitening procedure was quick and completely painless. Highly recommend DentalCare.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Dental Implants Patient",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Professional team and state-of-the-art modern equipment. They made me feel completely comfortable throughout my entire treatment plan.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Regular Checkup Patient",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Amazing experience and great results. The staff is always punctual and the clinic environment is squeaky clean and welcoming.",
  },
];

function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-stone-800 text-amber-200/80 border border-amber-200/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-100">
            What Our Patients Say
          </h2>
          <p className="text-stone-300 mt-4 text-base sm:text-lg leading-relaxed">
            Trusted by thousands of happy patients across the country.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-stone-800/60 border border-stone-800 hover:border-amber-200/30 p-8 rounded-2xl shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars in Muted Champagne Gold */}
                <div className="flex text-amber-200 gap-1 mb-4" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-stone-300 italic leading-relaxed mb-6 text-sm sm:text-base">
                  "{item.review}"
                </p>
              </div>

              {/* User Meta Information */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-700/60 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-200/30"
                />
                <div>
                  <h4 className="font-bold text-amber-100 text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-amber-200/80 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;