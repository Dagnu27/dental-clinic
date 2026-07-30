import React from "react";

function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-6 bg-stone-900 text-stone-100">
      
      {/* Very Soft Low-Intensity Glows */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-amber-100/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Muted Badge */}
        <span className="inline-block bg-stone-800 text-amber-200/80 border border-amber-200/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
          Take the First Step
        </span>

        {/* Soft Metallic Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-amber-100">
          Ready For Your Best Smile?
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          Schedule your appointment today and receive professional dental care from our experienced team.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Subtle Champagne Gold Button */}
          <button className="w-full sm:w-auto bg-amber-200/90 hover:bg-amber-200 text-stone-900 active:scale-95 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
            Book Appointment Now
          </button>

          {/* Muted Border Button */}
          <a
            href="tel:+1234567890"
            className="w-full sm:w-auto border border-stone-700 bg-stone-800/50 hover:bg-stone-800 active:scale-95 px-8 py-4 rounded-xl font-medium text-stone-200 transition-all duration-200 text-center"
          >
            📞 Call (251) 945-789-066
          </a>
        </div>

        {/* Micro-copy */}
        <p className="text-xs sm:text-sm text-stone-400 mt-6">
          ⚡ Quick 2-minute booking • No hidden fees
        </p>

      </div>
    </section>
  );
}

export default CTA;