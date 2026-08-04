import Button from "./Button";
import InputField from "./InputField";

import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function ContactForm() {
  return (
    <div className="w-[500px]">
      {/* Top Buttons */}

      <div className="flex gap-5">
        <Button icon={<MdMessage />} text="VIA SUPPORT CHAT" />

        <Button icon={<IoCall />} text="VIA CALL" />
      </div>

      {/* Email Button */}

      <div className="mt-4">
        <Button icon={<MdMessage />} text="VIA EMAIL FORM" outline={true} />
      </div>

      {/* Form */}

      <form className="mt-8">
        <InputField label="Name" />

        <InputField label="E-Mail" type="email" />

        <InputField label="Text" type="textarea" />

        <div className="flex justify-end mt-6">
          <button className="bg-black text-white px-10 py-3 rounded hover:bg-gray-800 duration-300 cursor-pointer">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
