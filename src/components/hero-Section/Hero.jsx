import React from "react";

const Hero = () => {
  return (
    <section
      className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 pt-8 lg:pt-12 pb-12"
      style={{
        background:
          "linear-gradient(149.47deg, #0059FF -21.36%, #000000 68.05%)",
      }}
    >
      {/* Left */}
      <div className="flex flex-col justify-center text-white max-w-2xl lg:pl-15">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Reliable, Secure & Scalable Hosting Solutions for your Businesses
        </h1>
        <p className="mt-6 text-gray-300 leading-relaxed text-base sm:text-lg">
          From datacentre co-location to fully managed VPS and web hosting, 9
          Hosting delivers future-ready infrastructure with great support you
          can count on.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl lg:text-2xl font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg w-fit">
          Get Started
        </button>
      </div>

      {/* Right */}
      <div className="flex justify-center items-center mb-8 lg:mb-0">
        <img
          src="/images/Group 208.png"
          alt="Servers"
          className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[950px] 2xl:w-[1000px] max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
