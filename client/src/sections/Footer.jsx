import React from "react";

function Footer() {
  return (
    <footer className="bg-[rgb(24,22,20)] text-stone-300 pt-8 pb-6 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Fixed 4-Column Grid for all screen sizes */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 pb-6 border-b border-stone-800">

          {/* Column 1: Brand Info */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-xl font-bold text-amber-100/90 leading-tight">
              DentalCare
            </h3>
            <p className="text-stone-400 text-[10px] sm:text-sm leading-tight sm:leading-relaxed">
              Modern dental care for healthy smiles.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-1 sm:gap-2 pt-1 text-stone-400">
              <a href="#" className="px-1.5 py-0.5 bg-stone-800/80 hover:bg-stone-800 hover:text-amber-200 rounded text-[9px] sm:text-xs transition-colors">
                FB
              </a>
              <a href="#" className="px-1.5 py-0.5 bg-stone-800/80 hover:bg-stone-800 hover:text-amber-200 rounded text-[9px] sm:text-xs transition-colors">
                IG
              </a>
              <a href="#" className="px-1.5 py-0.5 bg-stone-800/80 hover:bg-stone-800 hover:text-amber-200 rounded text-[9px] sm:text-xs transition-colors">
                LN
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-stone-100 font-semibold text-xs sm:text-base mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1 text-[10px] sm:text-sm text-stone-400">
              <li><a href="#home" className="hover:text-amber-200 transition-colors block truncate">Home</a></li>
              <li><a href="#about" className="hover:text-amber-200 transition-colors block truncate">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors block truncate">Services</a></li>
              <li><a href="#dentists" className="hover:text-amber-200 transition-colors block truncate">Dentists</a></li>
              <li><a href="#testimonials" className="hover:text-amber-200 transition-colors block truncate">Reviews</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-stone-100 font-semibold text-xs sm:text-base mb-2">
              Services
            </h4>
            <ul className="space-y-1 text-[10px] sm:text-sm text-stone-400">
              <li><a href="#cleaning" className="hover:text-amber-200 transition-colors block truncate">Cleaning</a></li>
              <li><a href="#whitening" className="hover:text-amber-200 transition-colors block truncate">Whitening</a></li>
              <li><a href="#implants" className="hover:text-amber-200 transition-colors block truncate">Implants</a></li>
              <li><a href="#orthodontics" className="hover:text-amber-200 transition-colors block truncate">Braces</a></li>
              <li><a href="#checkup" className="hover:text-amber-200 transition-colors block truncate">Checkup</a></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="text-stone-100 font-semibold text-xs sm:text-base mb-2">
              Contact
            </h4>
            <div className="space-y-1 text-[10px] sm:text-sm text-stone-400">
              <p className="flex items-start gap-1">
                <span>📍</span>
                <span className="truncate">Addis Ababa</span>
              </p>
              <p className="flex items-center gap-1">
                <span>✉️</span>
                <a href="mailto:info@dentalcare.com" className="hover:text-amber-200 transition-colors truncate">
                  info@dentalcare.com
                </a>
              </p>
              <p className="flex items-center gap-1">
                <span>📞</span>
                <a href="tel:+251900000000" className="hover:text-amber-200 transition-colors truncate">
                  +251 900 000 000
                </a>
              </p>
              <div className="pt-1">
                <span className="inline-block bg-stone-800/80 border border-stone-700 text-amber-200/90 px-1.5 py-0.5 rounded text-[8px] sm:text-xs">
                  Mon-Sat: 8am-6pm
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-row items-center justify-between text-[9px] sm:text-xs text-stone-500 gap-2">
          <p>© {new Date().getFullYear()} DentalCare.</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;