import ContactForm from "./ContactForm";
import contact from "../assets/contact.png";

function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">

      <h1 className="text-6xl font-extrabold">
        CONTACT US
      </h1>

      <p className="mt-4 text-gray-600 uppercase font-semibold text-sm leading-6 max-w-3xl">
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM
        YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT,
        YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
        OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mt-12">

        <ContactForm />

        <div className="flex justify-center">
          <img
            src={contact}
            alt="contact"
            className="w-[480px] object-contain"
          />
        </div>

      </div>

    </section>
  );
}

export default ContactSection;