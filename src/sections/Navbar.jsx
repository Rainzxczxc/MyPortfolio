import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/src/Pics/Logo.avif" // replace with your logo path
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-bold text-black text-xl">
            <a
              href="#home"
              className="hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Home
            </a>
            <a
              href="#skills"
              className="hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Contact
            </a>
          </div>

          {/* Download CV Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="/cv.pdf"
              download
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-lg hover:bg-cyan-800 hover:drop-shadow-[0_0_10px_#155e75] transition"
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
            <a
              href="#home"
              className="block hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Home
            </a>
            <a
              href="#skills"
              className="block hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Projects
            </a>
            <a
              href="#about"
              className="block hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="block hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Contact
            </a>
            <a
              href="/cv.pdf"
              download
              className="block bg-black text-white px-4 py-2 rounded-lg text-center hover:text-cyan-600 hover:drop-shadow-[0_0_10px_#155e75] transition"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
