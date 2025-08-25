const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-blue-500 mb-4">
        {icon}
      </div>
      <p className="text-white font-medium">{title}</p>
    </div>
  );
};

export default ServiceCard;
