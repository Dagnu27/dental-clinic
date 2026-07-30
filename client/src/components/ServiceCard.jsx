function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <button className="text-blue-600 font-semibold">
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;