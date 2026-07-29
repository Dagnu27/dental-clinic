function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            img
          </div>
          <h1 className="text-2xl font-bold">DentalCare</h1>
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Dentists</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-full">
          Book Appointment
        </button>

      </div>
    </nav>
  );
}

export default Navbar;