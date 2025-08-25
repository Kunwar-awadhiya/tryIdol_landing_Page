// components/Testimonials/TestimonialCard.jsx
const TestimonialCard = ({ text, name, role }) => {
  return (
    <div className="bg-black border border-white-700 rounded-lg p-4 text-center text-white max-w-sm">
      <p className="mb-4 italic">"{text}"</p>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-white rounded-full mb-2"></div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
