import React from "react";
import img from "../assets/Heroimg.png";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6">
        <div className="space-y-6">
          <h1 className="text-5xl/14 font-semibold max-w-430px">
            Virtual healthcare for you
          </h1>
          <p className="text-xl text-[#458FF6]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="bg-[#458FF6] text-white px-8 py-4 rounded-full hover:bg-blue-700 duration-300">Consult today</button>
        </div>
        {/* Right */}

        <img src={img} alt="Hero" className="w-620px" />
      </div>
    </section>
  );
};

export default HeroSection;
