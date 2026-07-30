import React from "react";
import heroImage from "../assets/hero.jpg";

const STATS = [
  { id: 1, number: "5000+", label: "Patients Served" },
  { id: 2, number: "15+", label: "Expert Dentists" },
  { id: 3, number: "10+", label: "Years Experience" },
];

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Content */}
        <div className="flex flex-col items-start">
          {/* <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
            <span>🦷</span> Trusted Dental Clinic
          </span> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight tracking-tight">
            Healthy Smiles <br className="hidden sm:inline" />
            Start Here
          </h1>

          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-xl leading-relaxed">
            Professional dental care with modern technology and experienced
            dentists dedicated to helping you achieve a healthy smile.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-md hover:shadow-lg">
              Book Appointment
            </button>

            <button className="border border-gray-300 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-50 active:scale-95 transition-all">
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-gray-100 w-full">
            {STATS.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {item.number}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image & Visual Card */}
        <div className="relative mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Dentist giving a patient a dental consultation"
            className="w-full max-w-lg mx-auto rounded-2xl object-cover"
          />

          {/* Floating Rating Card */}
          <div className="absolute -top-4 -left-2 sm:top-8 sm:left-4 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-gray-100 flex items-center gap-3">
            {/* <div className="bg-amber-100 p-2 rounded-xl text-xl">⭐</div> */}
            <div>
              {/* <p className="text-gray-900 font-bold text-sm sm:text-base">4.9 Rating</p> */}
              <p className="text-gray-500 text-xs sm:text-sm">
                {/* Trusted by 5,000+ patients */}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;