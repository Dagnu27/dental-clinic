import React from "react";
import aboutImage from "../assets/about.jpg";

const FEATURES = [
  "Modern Dental Equipment",
  "Experienced Dentists",
  "Online Appointment Booking",
  "Emergency Dental Care",
];

function About() {
  return (
    <section className="py-16 md:py-24 px-6 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Image with Decorative Border */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-amber-200/10 blur-xl pointer-events-none" />
          <img
            src={aboutImage}
            alt="Dental Clinic interior with modern equipment"
            className="relative rounded-2xl shadow-xl w-full object-cover border border-stone-800"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <span className="inline-block bg-stone-800 text-amber-200/80 border border-amber-200/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-100 mb-6 leading-tight">
            Caring For Your Smile With Modern Dentistry
          </h2>

          <p className="text-stone-300 text-base sm:text-lg mb-8 leading-relaxed">
            We provide professional dental care using modern technology and a
            patient-focused approach to make every visit comfortable.
          </p>

          {/* Features List with Gold Checkmarks */}
          <div className="space-y-3.5 mb-8">
            {FEATURES.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-200/10 text-amber-200 text-xs font-bold border border-amber-200/20">
                  ✓
                </span>
                <p className="text-stone-200 text-sm sm:text-base font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-amber-200/90 hover:bg-amber-200 text-stone-900 active:scale-95 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;