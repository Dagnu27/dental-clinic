import React, { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Framed Logo Badge to gracefully handle image backgrounds */}
          <div className="p-1.5 bg-stone-800/80 border border-stone-700/80 rounded-xl group-hover:border-amber-200/40 transition-colors shadow-sm">
            <img
              src={logo}
              alt="DentalCare Logo"
              className="h-8 sm:h-9 w-auto object-contain rounded-lg"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-amber-100 tracking-tight group-hover:text-amber-200 transition-colors">
            DentalCare
          </span>
        </a>

        {/* Desktop Navigation Links Container */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-300 bg-stone-800/60 border border-stone-800 px-3 py-1.5 rounded-full">
          <li>
            <a
              href="#home"
              className="px-4 py-1.5 rounded-full hover:text-amber-100 hover:bg-stone-800 transition-all duration-200 block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-4 py-1.5 rounded-full hover:text-amber-100 hover:bg-stone-800 transition-all duration-200 block"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="px-4 py-1.5 rounded-full hover:text-amber-100 hover:bg-stone-800 transition-all duration-200 block"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#dentists"
              className="px-4 py-1.5 rounded-full hover:text-amber-100 hover:bg-stone-800 transition-all duration-200 block"
            >
              Dentists
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="px-4 py-1.5 rounded-full hover:text-amber-100 hover:bg-stone-800 transition-all duration-200 block"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full hover:text-amber-100 hover:bg-stone-800 transition-all duration-200 block"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-amber-200/90 hover:bg-amber-200 text-stone-900 px-6 py-2.5 rounded-xl text-sm font-semibold active:scale-95 transition-all shadow-md">
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-stone-300 hover:text-amber-100 focus:outline-none bg-stone-800/80 rounded-lg border border-stone-700/60"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-900/95 backdrop-blur-md px-6 py-5 space-y-4">
          <ul className="flex flex-col gap-2 text-stone-300 font-medium text-sm">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-100 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-100 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-100 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#dentists"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-100 transition-colors"
              >
                Dentists
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-100 transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-100 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="pt-2 border-t border-stone-800">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-amber-200/90 hover:bg-amber-200 text-stone-900 px-6 py-3 rounded-xl text-sm font-semibold transition active:scale-95"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;