import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       {/* Logo */}

{/* Logo */}
<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="DentalCare Logo"
    className="h-12 w-auto"
  />

  <h1 className="text-2xl font-bold text-gray-800">
    DentalCare
  </h1>
</div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Dentists</a></li>
          <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition">
          Book Appointment
        </button>

      </div>
    </nav>
  );
}

export default Navbar;