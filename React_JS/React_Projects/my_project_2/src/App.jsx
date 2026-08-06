import Navbar from "./components/Navbar";

import contact from "./assets/contact.png";

import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto mt-10 px-4">

        <h1 className="text-6xl font-black">
          CONTACT US
        </h1>

        <p className="uppercase text-gray-600 font-semibold leading-7 mt-5 max-w-4xl">
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mt-12">

          {/* Left */}

          <div className="flex-1 w-full">

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-5">

              <button className="flex-1 bg-black text-white py-3 rounded font-semibold flex justify-center items-center gap-2 hover:bg-gray-800 duration-300 cursor-pointer">

                <MdMessage />

                VIA SUPPORT CHAT

              </button>

              <button className="flex-1 bg-black text-white py-3 rounded font-semibold flex justify-center items-center gap-2 hover:bg-gray-800 duration-300 cursor-pointer">

                <IoCall />

                VIA CALL

              </button>

            </div>

            {/* Email Button */}

            <button className="w-full border border-black py-3 rounded mt-4 font-semibold flex justify-center items-center gap-2 hover:bg-gray-100 duration-300 cursor-pointer">

              <MdEmail />

              VIA EMAIL FORM

            </button>

            {/* Form */}

            <form className="mt-8">

              <div className="relative mb-7">

                <label className="absolute -top-3 left-4 bg-white px-2 text-sm">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full border border-black p-4 outline-none"
                />

              </div>

              <div className="relative mb-7">

                <label className="absolute -top-3 left-4 bg-white px-2 text-sm">
                  E-Mail
                </label>

                <input
                  type="email"
                  className="w-full border border-black p-4 outline-none"
                />

              </div>

              <div className="relative mb-7">

                <label className="absolute -top-3 left-4 bg-white px-2 text-sm">
                  TEXT
                </label>

                <textarea
                  rows="6"
                  className="w-full border border-black p-4 outline-none"
                ></textarea>

              </div>

              <div className="flex justify-end">

                <button className="bg-black text-white px-12 py-3 rounded font-semibold hover:bg-gray-800 duration-300 cursor-pointer">

                  SUBMIT

                </button>

              </div>

            </form>

          </div>

          {/* Right */}

          <div className="flex-1 flex justify-center">

            <img
              src={contact}
              alt="contact"
              className="w-full max-w-500px"
            />

          </div>

        </div>

      </section>
    </>
  );
}

export default App;