import React from "react";
import user from "../assets/user.png";

const Testimonial = () => {
  return (
    <section className="max-w-5xl mx-auto my-24">
      <div className="bg-[#5A98F2] rounded-3xl text-white p-16">
        <h2 className="text-4xl font-bold text-center">
          What our customer are saying
        </h2>
        <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 gap-12">
          <div className="flex items-center gap-6">
            <img
              src={user}
              alt="Edward Newgate"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <div>
              <h3 className="text-2xl font-bold">Edward Newgate</h3>
              <p>Founder Circle</p>
            </div>
          </div>
          <p className="max-w-lg leading-8">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
