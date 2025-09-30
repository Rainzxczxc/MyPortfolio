import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  // Ref for section visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Variants
  const borderVariants = {
    hidden: { borderColor: "transparent", opacity: 0 },
    visible: {
      borderColor: "rgba(0,0,0,1)",
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 2.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const icons = [
    {
      icon: <FaFacebookF size={18} />,
      href: "https://www.facebook.com/rendel.pulido07",
      direction: { x: -60, y: 0 },
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: "https://www.linkedin.com/in/rendel-ivan-pulido-690140386",
      direction: { x: 0, y: -60 },
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/let_be_rain/",
      direction: { x: 60, y: 0 },
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Rainzxczxc",
      direction: { x: 0, y: 60 },
    },
  ];

  const titleWords = ["Let’s", "Work", "Together"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Section */}
      <section
        id="Contact"
        ref={sectionRef}
        className="flex flex-col flex-grow items-center justify-center px-6 md:px-20 text-center md:text-left"
      >
        {/* Animated Container */}
        <motion.div
          className="max-w-2xl w-full border-4 border-black rounded-xl p-6 md:p-10 bg-white transform hover:scale-105 transition-transform duration-500"
          variants={borderVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Title Animation */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-black mb-7"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={`inline-block mr-2 ${
                  word === "Work" ? "outline-text" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Fade-in Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>

            <div className="mb-4">
              <p className="font-semibold text-black">
                rendelivanpulido@gmail.com
              </p>
              <p className="text-black">+639662663872</p>
            </div>
          </motion.div>

          {/* Icons with Directional Entrance */}
          <motion.div
            className="flex space-x-3 justify-center md:justify-start"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {icons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="blank"
                initial={{ opacity: 0, ...item.direction }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                          delay: 2.6 + index * 0.2,
                          duration: 0.6,
                          ease: "easeOut",
                        },
                      }
                    : {}
                }
                className="p-2 sm:p-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-3 text-center text-sm">
        @2025 Rendel Pulido
      </footer>
    </div>
  );
}

export default Contact;
