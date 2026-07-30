import aboutImage from "../assets/about.jpg";

function About() {
  const features = [
    "Modern Dental Equipment",
    "Experienced Dentists",
    "Online Appointment Booking",
    "Emergency Dental Care",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <img
            src={aboutImage}
            alt="Dental Clinic"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right */}
        <div>
          <span className="text-blue-600 font-semibold">
            ABOUT US
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            Caring For Your Smile With Modern Dentistry
          </h2>

          <p className="text-gray-600 mb-8">
            We provide professional dental care using modern
            technology and a patient-focused approach.
          </p>

          <div className="space-y-4 mb-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* <span>✅</span> */}
                <p>{item}</p>
              </div>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;