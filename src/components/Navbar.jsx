import React from 'react';
// 1. Import the specific icon we need
import { MdCall } from 'react-icons/md';

export default function Navbar() {
  return (
    <header className="navbar">
      {/* 2. Simplified Logo Area: Uses CSS gap for spacing */}
      <div className="brand-group">
        <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 4 3 9 6 14 3-5 6-10 6-14 0-3.5-2.5-6-6-6z" />
        </svg>
        <span className="brand-name">Luma Dental Care</span>
      </div>

      {/* 3. Navigation Links: Standard structure */}
      <nav className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#patient-info">Patient Info</a>
        <a href="#reviews">Reviews</a>
        {/* We need an active style for 'Contact' to match image_8.png */}
        <a href="#contact" className="active-outline">Contact</a>
      </nav>

      {/* 4. Corrected Call CTA: Icon is now a distinct element */}
      <div className="nav-cta">
        <div className="call-info-wrapper">
          <MdCall className="call-icon" /> {/* The Phone Icon element */}
          <div className="call-text">
            <small>Call Us Anytime</small>
            <strong>(555) 123-4567</strong>
          </div>
        </div>
        <button className="btn-primary">Book Appointment</button>
      </div>
    </header>
  );
}