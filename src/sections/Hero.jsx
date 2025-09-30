import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/style.css";
import  Astronaut from {"../Pics/Astronaut.png"}

const Hero = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when 30% of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // 30% visibility
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      id="Home"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 sm:px-6 md:px-20 py-16 sm:py-28 relative"
    >
      {/* Left Content */}
      <div className="md:w-1/2 max-w-xl w-full">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-light leading-snug ${
            isVisible ? "opening-crawl" : "opacity-0"
          }`}
        >
          <span className="whitespace-nowrap">
            Hello I’m <span className="font-bold">Rendel Pulido.</span>
          </span>
          <br />
          <span className="font-bold">Web </span>
          <span className="outline-text">Developer</span>
          <br />
          Based In <span className="font-bold">Philippines.</span>
        </h1>

        <br />

        <div
          className={`w-full max-w-full sm:max-w-2xl p-4 sm:p-8 rounded-xl border-4 border-[#000000] shadow-xl 
                     shadow-[#008b8b]/50 bg-white transition-all duration-700 ${
                       isVisible
                         ? "text-slide-bounce"
                         : "opacity-0 translate-x-[-50px]"
                     }`}
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

        {/* Social Icons with random direction animation */}
        <div
          className={`flex gap-3 sm:gap-5 mt-8 justify-center md:justify-start transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              href: "https://www.facebook.com/rendel.pulido07",
              icon: <FaFacebook size={24} />,
              key: "facebook",
            },
            {
              href: "https://www.linkedin.com/in/rendel-ivan-pulido-690140386",
              icon: <FaLinkedin size={24} />,
              key: "linkedin",
            },
            {
              href: "https://www.instagram.com/let_be_rain/",
              icon: <FaInstagram size={24} />,
              key: "instagram",
            },
            {
              href: "https://github.com/Rainzxczxc",
              icon: <FaGithub size={24} />,
              key: "github",
            },
          ].map(({ href, icon, key }) => (
            <a
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className={`p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition social-btn-${key}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
        <img
          src={Astronaut}
          alt="Astronaut"
          className={`w-full max-w-[280px] sm:max-w-[350px] md:w-[650px] md:max-w-none object-contain transition-all duration-700 ${
            isVisible ? "astronaut-intro" : "opacity-0 translate-y-[-50px]"
          }`}
        />
      </div>
    </section>
  );
};

export default Hero;
