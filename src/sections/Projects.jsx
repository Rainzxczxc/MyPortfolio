import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import StarsBackground from "./Components/StarsBg";
import FaceCheck from "../Pics/ProjectPics/FaceCheck.png";
import Forest from "../Pics/ProjectPics/Forest.png";
import SamplePortfolio from "../Pics/ProjectPics/SamplePortfolio.png";

function Projects() {
  const projects = [
    {
      id: "01",
      title:
        "FaceCheck - An Web-based Attendance Monitoring System With Face Recognition",
      desc: "FaceCheck is an intelligent attendance monitoring system that utilizes facial recognition technology to automate and secure attendance tracking. It allows faculty to easily verify student presence in real time by scanning faces through a web interface. Built with Face API.js, it ensures accuracy, efficiency, and convenience while reducing manual record errors.",
      image: { FaceCheck },
      reverse: false,
      languages: ["HTML", "CSS", "JavaScript", "Face API.js", "PHP", "MySQL"],
      link: "https://facecheck.site/",
    },
    {
      id: "02",
      title: "Forest Login/Sign Up Page",
      desc: "A beautifully designed forest-themed authentication page that brings a calming and nature-inspired aesthetic to the login and sign-up experience. This project demonstrates creative UI design using React and Tailwind CSS, combining smooth animations and responsive layouts for a visually engaging user experience.",
      image: { Forest },
      reverse: true,
      languages: ["React", "Tailwind CSS"],
      link: "https://rainzxczxc.github.io/ForestLogin/",
    },
    {
      id: "03",
      title: "Sample Portfolio",
      desc: "A personal portfolio website showcasing my skills, projects, and achievements as a web developer. Designed with a focus on clarity and interactivity, it features responsive sections, smooth transitions, and a professional layout — providing visitors with an overview of my work, passion, and technical expertise.",
      image: { SamplePortfolio },
      reverse: false,
      languages: ["HTML", "CSS", "JavaScript"],
      link: "https://rainzxczxc.github.io/Portfolio/",
    },
  ];

  // Track which projects are visible
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observers = [];

    projects.forEach((_, index) => {
      const element = document.getElementById(`project-${index}`);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [projects]);

  return (
    <section
      id="Projects"
      className="relative bg-black text-white py-16 px-6 md:px-16 overflow-hidden"
    >
      <div className="pointer-events-none">
        <StarsBackground />
      </div>

      <h2 className="text-6xl font-bold mb-12 text-center opening-crawl">
        My{" "}
        <span className="text-transparent bg-clip-text inverted-outline-text">
          Projects
        </span>
      </h2>

      <div className="flex flex-col space-y-24">
        {projects.map((project, index) => {
          const isVisible = visibleProjects.includes(index);

          return (
            <div
              id={`project-${index}`}
              key={index}
              className={`flex flex-col ${
                project.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-10 ${
                isVisible ? "" : "opacity-0"
              } transition-opacity duration-500`}
            >
              {/* Image */}
              <div
                className={`md:w-1/2 ${
                  isVisible ? "float-animation zoom-in-animation" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className={`md:w-1/2 ${isVisible ? "opening-crawl" : ""}`}>
                <h3 className="text-6xl font-extrabold text-white/90 mb-2">
                  {project.id}
                </h3>
                <h4 className="text-4xl font-bold mb-4">{project.title}</h4>
                <p className="text-gray-400 mb-6 text-2xl">{project.desc}</p>

                {/* Languages */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.languages.map((lang, langIndex) => (
                    <span
                      key={langIndex}
                      className="px-4 py-2 border rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default blinking-border"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white hover:text-cyan-400 transition"
                >
                  <FaExternalLinkAlt className="text-4xl" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
