import { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-white"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="text-gray-400 pb-4">{answer}</p>}
    </div>
  );
}

export default FaqItem

