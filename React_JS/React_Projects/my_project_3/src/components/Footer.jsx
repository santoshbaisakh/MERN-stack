import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5A98F2] text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        <div>
          <h2 className="text-3xl font-bold">Trafalgar</h2>
          <p className="mt-6">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="space-y-3 mt-6">
            <li>About</li>
            <li>Testimonials</li>
            <li>Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl">Region</h3>
          <ul className="space-y-3 mt-6">
            <li>India</li>
            <li>Singapore</li>
            <li>Indonesia</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl">Help</h3>
          <ul className="space-y-3 mt-6">
            <li>Help Center</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
