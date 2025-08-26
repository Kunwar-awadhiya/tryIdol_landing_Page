import { FaClock, FaServer, FaLock, FaBolt, FaWifi, FaChartLine } from "react-icons/fa";
import { MdDns, MdOutlineSecurity } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: <FaClock size={40} className="text-white" />, title: "True 24/7 Support" },
  { icon: <MdDns size={40} className="text-white" />, title: "Great Connectivity" },
  { icon: <FaServer size={40} className="text-white" />, title: "Server Room Maintenance" },
  { icon: <FaLock size={40} className="text-white" />, title: "Security" },
  { icon: <FaBolt size={40} className="text-white" />, title: "Redundant Power" },
  { icon: <FaWifi size={40} className="text-white" />, title: "Network Redundancy" },
  { icon: <FaChartLine size={40} className="text-white" />, title: "Scalable" },
  { icon: <FaMapMarkerAlt size={40} className="text-white" />, title: "Useable Clean IP’s" },
  { icon: <MdOutlineSecurity size={40} className="text-white" />, title: "Data Protection" },
  { icon: <AiOutlineCheckSquare size={40} className="text-white" />, title: "100% Uptime" },
];

const Services = () => {
      return (
    <section className="w-full bg-black py-16 pb-40">
      <div className="text-center mb-12">
        <p className="text-blue-500 uppercase font-semibold text-3xl">Why Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          What Every 9 Hosting Service Includes
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Your infrastructure is your business lifeline — and we treat it that way.
          Every service we offer comes with essential features to keep you connected,
          secure and supported, 24/7.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services

