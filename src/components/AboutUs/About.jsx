import ServiceCard from "./ServiceCard";
import { FaServer, FaGlobe, FaHome, FaCogs, FaShieldAlt } from "react-icons/fa";

const About = () => {
    const services = [
    {
      icon: <FaServer />,
      title: "Datacenter Co-Location",
      description:
        "Secure your hardware in our state-of-the-art UK facilities with 24/7 monitoring, redundant power, and advanced cooling systems.",
      buttonText: "Learn more →",
      buttonLink: "#",
    },
    {
      icon: <FaGlobe />,
      title: "VPS Hosting",
      description:
        "High-performance virtual private servers with dedicated resources, full root access, and instant scalability for growing businesses.",
      buttonText: "Learn more →",
      buttonLink: "#",
    },
    {
      icon: <FaHome />,
      title: "Website Hosting",
      description:
        "Lightning-fast website hosting with SSD storage, unlimited bandwidth, and easy-to-use control panel for seamless management.",
      buttonText: "Learn more →",
      buttonLink: "#",
    },
    {
      icon: <FaCogs />,
      title: "Infrastructure Consultancy",
      description:
        "Expert guidance on optimizing your IT infrastructure for efficiency, security, and scalability from our experienced consultants.",
      buttonText: "Learn more →",
      buttonLink: "#",
    },
    {
      icon: <FaShieldAlt />,
      title: "vNOC Monitoring",
      description:
        "Round-the-clock network operations center monitoring to proactively identify and resolve issues before they impact your business.",
      buttonText: "Learn more →",
      buttonLink: "#",
    },
    {
      icon: <FaShieldAlt />,
      title: "Need a Custom Solution?",
      description:
        "Contact our experts to design a tailored hosting solution that perfectly meets your business requirements.",
      buttonText: "Get in Touch",
      buttonLink: "#",
      buttonPrimary: true,
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="text-center mb-12">
        <p className="text-blue-500 text-3xl">Our Services</p>
        <h2 className="text-4xl font-bold text-white mt-2">Our Top Notch Services</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Enterprise-grade hosting solutions tailored to meet your business needs with unmatched
          reliability and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default About
