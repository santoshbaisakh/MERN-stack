import React from "react";
import provider from "../assets/provider.png";

const Providers = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <img src={provider} alt="provider" className="w-full lg:w-1/2" />
        <div className="space-y-8">
          <h2 className="text-5xl font-bold leading-tight">
            Leading healthcare providers
          </h2>
          <div className="w-16 h-1 bg-black rounded"></div>
          <p className="text-gray-500 leading-8">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="border border-[#458FF6] text-[#458FF6] px-8 py-3 rounded-full hover:bg-[#458FF6] hover:text-white duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Providers;
