
import PricingCard from "./PricingCard";

const Packages = () => {
  const plans = [
    {
      plan: "Standard",
      title: "Home",
      price: "$29.95/mo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      features: [
        "Fast internet 30 Mbps",
        "Mobile Broadband",
        "Home Line",
        "Free tv streaming",
        "Free Home Protect",
        "$80,000 coverage",
      ],
    },
    {
      plan: "Super",
      title: "Office & B2B",
      price: "$69.95/mo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      features: [
        "Fast internet 75 Mbps",
        "Mobile Broadband",
        "Home Line",
        "Free tv streaming",
        "Free Home Protect",
        "$80,000 coverage",
      ],
      primary: true, 
    },
    {
      plan: "Premium",
      title: "Enterprise",
      price: "$99.95/mo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      features: [
        "Fast internet 100 Mbps",
        "Mobile Broadband",
        "Home Line",
        "Free tv streaming",
        "Free Home Protect",
        "$80,000 coverage",
      ],
    },
  ];

  return (
    <section className="bg-black py-20 px-6 w-full pb-35 pt-30">
      <div className="text-center mb-12">
        <p className="text-blue-500 font-medium text-3xl">PACKAGES</p>
        <h2 className="text-4xl font-bold text-white mt-2">Choose Your Best Package</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}

export default Packages




