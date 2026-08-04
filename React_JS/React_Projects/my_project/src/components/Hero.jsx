import shoe from "../assets/shoe.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import Button from "./Button";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex items-center justify-between px-10 mt-16">

      {/* Left Side */}

      <div className="w-1/2">

        <h1 className="text-8xl font-black leading-none">
          YOUR FEET DESERVE THE BEST
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU
          WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE
          HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="flex gap-5 mt-8">

          <Button
            text="Shop Now"
            bgColor="bg-red-600"
            textColor="text-white"
          />

          <Button
            text="Category"
            bgColor="bg-white"
            textColor="text-gray-700"
            border="border border-gray-400"
          />

        </div>

        <div className="mt-8">

          <p className="text-gray-500">
            Also Available On
          </p>

          <div className="flex gap-4 mt-3">

            <img
              src={flipkart}
              alt="Flipkart"
              className="w-8"
            />

            <img
              src={amazon}
              alt="Amazon"
              className="w-8"
            />

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="w-1/2 flex justify-center">

        <img
          src={shoe}
          alt="Nike Shoe"
          className="w-[550px]"
        />

      </div>

    </section>
  );
}

export default Hero;