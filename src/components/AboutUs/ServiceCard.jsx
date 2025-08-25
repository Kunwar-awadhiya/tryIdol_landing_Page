const ServiceCard = ({ icon, title, description, buttonText, buttonLink, buttonPrimary }) => {
  return (
    <div className="border border-blue-600 rounded-xl p-6 text-white flex flex-col justify-between hover:shadow-lg hover:shadow-blue-800/30 transition">
      {/* Icon */}
      <div className="text-3xl text-blue-400 mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 mb-4">{description}</p>

      {/* Button */}
      <a
        href={buttonLink}
        className={`${
          buttonPrimary
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "text-blue-400 hover:text-blue-300"
        } px-4 py-2 rounded-lg font-medium w-fit transition`}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default ServiceCard;
