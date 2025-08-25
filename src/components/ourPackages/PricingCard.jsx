import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ title, plan, price, description, features, primary }) => {
  return (
    <div
      className={`rounded-xl border-2 p-8 flex flex-col justify-between ${
        primary ? "bg-white border-blue-500" : "bg-gray-700 border-blue-500"
      }`}
    >
      {/* Plan Title */}
      <div>
        <p className={`text-lg ${primary ? "text-gray-600" : "text-gray-200"}`}>
          {plan}
        </p>
        <h2
          className={`text-3xl font-bold mt-1 ${
            primary ? "text-blue-600" : "text-white"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-xl mt-2 ${
            primary ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {price}
        </p>
        <p
          className={`mt-3 text-sm ${
            primary ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <FaCheckCircle
                className={`${
                  primary ? "text-blue-600" : "text-blue-400"
                } w-5 h-5`}
              />
              <span
                className={`${
                  primary ? "text-gray-800" : "text-gray-200"
                } text-sm`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        className={`mt-8 w-full py-3 rounded-md font-semibold transition ${
          primary
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-white text-blue-600 hover:bg-gray-200"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
