import React from "react";
import profileImg from "../Pics/Profile/Profile.png"; // adjust path

function AboutMe() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 py-20 gap-10 text-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

      <div className="relative flex flex-col justify-center items-center">
        {/* Hologram Image */}
        <div className="relative hologram">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover w-[427px] md:w-[524px] opacity-100" // 3x larger: ~960px on small screens, ~1152px on medium+ (using arbitrary values for precise scaling)
          />

          {/* Scanning line effect */}
          <div className="scanline"></div>
        </div>
        {/* Projection Base */}
        <div className="projection-base mt-[-20px] w-[144px] h-2 rounded-full blur-md"></div>{" "}
        {/* Scaled to ~3x previous width (w-48 * 3 = w-[144px]) for balance */}
      </div>

      {/* Right Section - Text */}
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-6xl font-bold mb-6 text-black">
          About <span className="outline-text">Me</span>
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
          I’m a passionate and detail-oriented developer with a strong interest
          in creating modern, user-friendly, and visually engaging web
          applications. I enjoy turning ideas into reality through clean code,
          creative design, and thoughtful functionality. My journey in tech has
          taught me the importance of problem-solving, collaboration, and
          continuous learning — values I bring to every project I work on.
          Whether it’s building responsive interfaces or experimenting with new
          technologies, I’m always eager to explore innovative ways to improve
          the digital experience.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
          I began my journey as a web developer in 2023 when I became a leader
          and a sole developer of an thesis project, and since then, I became
          deeply into Web Development. Now that I graduate I want to enhance my
          skills and learn new technologies. I'm building web applications using
          modern technologies such as HTML5, CSS3, JavaScript, React.js,
          TailwindCSS and much more.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg">
          “I believe that every line of code tells a story — a story of growth,
          curiosity, and the drive to create something meaningful. For me,
          development isn’t just about writing programs; it’s about building
          solutions that make a difference. Every challenge is an opportunity to
          learn, every project a chance to improve, and every idea a step closer
          to becoming a better version of myself.”
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
