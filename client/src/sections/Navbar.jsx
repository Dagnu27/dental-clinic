import React, { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="DentalCare Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-2xl font-bold text-gray-800">
            DentalCare
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
          <li><a href="#dentists" className="hover:text-blue-600 transition-colors">Dentists</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-200">
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Services</a></li>
            <li><a href="#dentists" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Dentists</a></li>
            <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Testimonials</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Contact</a></li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition mt-2">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;