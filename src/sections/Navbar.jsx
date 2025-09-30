import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import ResumePDF from "../Resume/Resume.pdf";
import Logo from "../Pics/Logo.avi";

const sections = ["Home", "Skills", "Projects", "AboutMe", "Contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 8,
      },
    });
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3; // Adjust trigger point

      let foundSection = "Home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          foundSection = section;
        }
      }
      setCurrentSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-bold text-black text-xl relative">
            {sections.map((section) => {
              const isActive = currentSection === section;
              return (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative z-10 px-1 py-1 cursor-pointer distort-hover ${
                    isActive
                      ? "pointer-events-none hover:none cursor-default"
                      : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {section === "AboutMe" ? "About Me" : section}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Download CV Button (Desktop) */}
          <div className="hidden md:block transform hover:scale-105 transition-transform duration-200">
            <a
              href={ResumePDF}
              download="Resume.pdf"
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-lg "
            >
              Download CV
            </a>
          </div>

          {/* Mobile Burger Button with Animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <motion.span
                initial={false}
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-1 w-7 bg-black rounded"
              />
              <motion.span
                initial={false}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="block h-1 w-7 bg-black rounded my-1"
              />
              <motion.span
                initial={false}
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-1 w-7 bg-black rounded"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu with Dropdown Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-xl font-bold overflow-hidden text-center"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block hover:text-black-600 hover:drop-shadow-[0_0_10px_#155e75] transition`}
              >
                {section === "AboutMe" ? "About Me" : section}
              </a>
            ))}
            <a
              href={ResumePDF}
              download="Resume.pdf"
              className="block bg-black text-white px-4 py-2 rounded-lg text-center hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
