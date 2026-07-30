import React from "react";
import heroImage from "../assets/hero.jpg";

const STATS = [
  { id: 1, number: "5000+", label: "Patients Served" },
  { id: 2, number: "15+", label: "Expert Dentists" },
  { id: 3, number: "10+", label: "Years Experience" },
];

function Hero() {
  return (
    <section className="bg-stone-900 text-stone-100 py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Content */}
        <div className="flex flex-col items-start">
          
        

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-100 mt-6 leading-tight tracking-tight">
            Healthy Smiles <br className="hidden sm:inline" />
            Start Here
          </h1>

          {/* Description */}
          <p className="text-stone-300 mt-6 text-base sm:text-lg max-w-xl leading-relaxed">
            Professional dental care with modern technology and experienced
            dentists dedicated to helping you achieve a bright, healthy smile.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="bg-amber-200/90 hover:bg-amber-200 text-stone-900 px-8 py-3.5 rounded-xl font-semibold active:scale-95 transition-all shadow-md">
              Book Appointment
            </button>

            <button className="border border-stone-700 text-stone-200 hover:bg-stone-800 active:scale-95 px-8 py-3.5 rounded-xl font-medium transition-all">
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-stone-800 w-full">
            {STATS.map((item) => (
              <div key={item.id}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-100">
                  {item.number}
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image & Visual Card */}
        <div className="relative mt-4 md:mt-0">
          
          {/* Background Ambient Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-amber-200/10 blur-xl pointer-events-none" />

          {/* Main Hero Image */}
          <img
            src={heroImage}
            alt="Dentist giving a patient a dental consultation"
            className="relative w-full max-w-lg mx-auto rounded-2xl object-cover border border-stone-800 shadow-2xl"
          />

          {/* Floating Rating Card */}
          <div className="absolute -bottom-4 -left-2 sm:bottom-6 sm:-left-4 bg-stone-800/90 backdrop-blur-md border border-stone-700 shadow-2xl rounded-2xl p-3 sm:p-4 flex items-center gap-3">
            <div className="bg-amber-200/10 border border-amber-200/20 p-2 rounded-xl text-lg sm:text-xl text-amber-200">
              ⭐
            </div>
            <div>
              <p className="text-amber-100 font-bold text-xs sm:text-sm">
                4.9 Rating
              </p>
              <p className="text-stone-400 text-[11px] sm:text-xs">
                Trusted by 5,000+ patients
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;