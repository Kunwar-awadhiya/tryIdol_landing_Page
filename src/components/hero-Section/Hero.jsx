import React from "react";

const Hero = () => {
  return (
    <section
      className="mx-auto flex items-center justify-between px-16"
      style={{
        background:
          "linear-gradient(149.47deg, #0059FF -21.36%, #000000 68.05%)",
      }}
    >
      {/* Left */}
      <div className="flex flex-col justify-center text-white max-w-2xl pl-55">
        <h1 className="text-5xl font-bold leading-tight">
          Reliable, Secure & Scalable Hosting Solutions for your Businesses
        </h1>
        <p className="mt-6 text-gray-300 leading-relaxed">
          From datacentre co-location to fully managed VPS and web hosting, 9
          Hosting delivers future-ready infrastructure with great support you
          can count on.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold px-10 py-5 rounded-lg w-fit">
          Get Started
        </button>
      </div>

      {/* Right */}
      <div className="flex justify-center items-center">
        <img
          src="/public/images/Group 208.png"
          alt="Servers"
          className="w-[1000px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
