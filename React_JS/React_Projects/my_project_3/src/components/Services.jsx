import React from "react";
import ServiceCard from "./ServiceCard";

import doctor from "../assets/doctor.png";
import pharmacy from "../assets/pharmacy.png";
import consultation from "../assets/consultation.png";
import details from "../assets/details.png";
import emergency from "../assets/emergency.png";
import tracking from "../assets/tracking.png";

const services = [
  {
    image: doctor,
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    image: pharmacy,
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    image: consultation,
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image: details,
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image: emergency,
    title: "Emergency care",
    description: "You can get 24/7 urgent care for yourself or your family",
  },
  {
    image: tracking,
    title: "Tracking",
    description: "Track and save your medical history and health data",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Our services</h2>
        <div className="w-20 h-1 bg-black mx-auto mt-6 rounded-full"></div>
        <p className="text-gray-500 mt-8 max-w-4xl mx-auto leading-8">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="border-2 border-[#458FF6] text-[#458FF6] px-10 py-4 rounded-full hover:bg-[#458FF6] hover:text-white duration-300">
            Learn more
        </button>
      </div>
    </section>
  );
};

export default Services;
