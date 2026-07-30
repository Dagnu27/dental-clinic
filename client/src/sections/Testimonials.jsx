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
    <section className="py-16 md:py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Trusted by thousands of happy patients across the country.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-400 gap-1 mb-4" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* User Meta Information */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-medium">
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