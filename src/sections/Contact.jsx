import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Section */}
      <section className="flex flex-col flex-grow items-center justify-center px-6 md:px-20 text-center md:text-left">
        <div className="max-w-2xl w-full border-4 border-black rounded-xl p-6 md:p-10 bg-white">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-7">
            Let’s <span className="outline-text">Work</span> Together
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together to bring your ideas to life.
          </p>

          {/* Contact Info */}
          <div className="mb-4">
            <p className="font-semibold text-black">
              rendelivanpulido@gmail.com
            </p>
            <p className="text-black">+639662663872</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 justify-center md:justify-start">
            <a
              target="blank"
              href="https://www.facebook.com/rendel.pulido07"
              className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/rendel-ivan-pulido-690140386"
              className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/let_be_rain/"
              className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              target="blank"
              href="https://github.com/Rainzxczxc"
              className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-3 text-center text-sm">
        @2025 Rendel Pulido
      </footer>
    </div>
  );
}

export default Contact;
