import React from "react";
import mobile from "../assets/mobile.png";

const DownloadApp = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">Download our mobile apps</h2>
          <div className="w-16 h-1 bg-black rounded"></div>
          <p className="text-gray-500 leading-8">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="border border-[#458FF6] text-[#458FF6] px-8 py-3 rounded-full hover:bg-[#458FF6] hover:text-white duration-300">
            Download
          </button>
        </div>
        <img src={mobile} alt="mobile" className="w-full lg:w-1/2" />
      </div>
    </section>
  );
};

export default DownloadApp;
