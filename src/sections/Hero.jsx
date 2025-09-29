import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/style.css";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 sm:px-6 md:px-20 py-16 sm:py-28">
      {/* Left Content */}
      <div className="md:w-1/2 max-w-xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-snug">
          <span className="whitespace-nowrap">
            Hello I’am <span className="font-bold">Rendel Pulido.</span>
          </span>
          <br />
          <span className="font-bold">Web </span>
          <span className="outline-text">Developer</span>
          <br />
          Based In <span className="font-bold">Philippines.</span>
        </h1>
        <br />
        <div
          className="w-full max-w-full sm:max-w-2xl p-4 sm:p-8 rounded-xl border-4 border-[#000000] shadow-xl 
                   shadow-[#008b8b]/50 bg-white"
        >
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            I'm Rendel Ivan Pulido, a Bachelor of Science in Computer Science
            graduate (2025) from Don Mariano Marcos Memorial State University –
            South La Union Campus. With a strong focus on web development, I
            enjoy building dynamic, responsive, and creative websites while
            continuously improving my skills in front-end and back-end
            technologies.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-5 mt-8 justify-center md:justify-start">
          <a
            target="blank"
            href="https://www.facebook.com/rendel.pulido07"
            className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            <FaFacebook size={20} sm:size={26} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/rendel-ivan-pulido-690140386"
            className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            <FaLinkedin size={20} sm:size={26} />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/let_be_rain/"
            className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            <FaInstagram size={20} sm:size={26} />
          </a>
          <a
            target="blank"
            href="https://github.com/Rainzxczxc"
            className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            <FaGithub size={20} sm:size={26} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
        <img
          src="/src/Pics/Astronaut.png"
          alt="Astronaut"
          className="w-full max-w-[280px] sm:max-w-[350px] md:w-[650px] md:max-w-none object-contain float-animation"
        />
      </div>
    </section>
  );
};

export default Hero;
