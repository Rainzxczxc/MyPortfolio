import React from "react";
import { FaGitAlt, FaPhp, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiCanva,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <SiHtml5 size={60} />, label: "HTML5" },
    { icon: <SiJavascript size={60} />, label: "Javascript" },
    { icon: <SiCss3 size={60} />, label: "CSS3" },
    { icon: <FaReact size={60} />, label: "React.js" },
    { icon: <FaPhp size={60} />, label: "PHP" },
    { icon: <SiTailwindcss size={60} />, label: "Tailwind" },
    { icon: <FaPython size={60} />, label: "Python" },
    { icon: <SiMysql size={60} />, label: "MySQL" },
    { icon: <SiNodedotjs size={60} />, label: "Node.js" },
    { icon: <SiCanva size={60} />, label: "Canva" },
    { icon: <SiFigma size={60} />, label: "Figma" },
    { icon: <FaGitAlt size={60} />, label: "Git" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-1">
      <div
        className="
      border-4 border-black rounded-xl 
      p-6 sm:p-8 md:p-10 lg:p-12
      w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]
      mx-auto
    "
      >
        <h2 className="text-6xl font-bold mb-10 text-center">
          My <span className="outline-text">Skills</span>
        </h2>

        <div
          className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-6
        place-items-center
      "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
            flex flex-col items-center justify-center
            border-2 border-black rounded-xl
            p-6 w-full max-w-[150px] aspect-square
            hover:bg-black hover:text-white
            transition-all duration-300 ease-in-out
          "
            >
              <div className="mb-3">{skill.icon}</div>
              <p className="text-sm font-semibold text-center">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"/>
    </section>
  );
}

export default Skills;
