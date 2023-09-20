import React from "react";
import { Fade } from "react-awesome-reveal";
import "animate.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  return (
    <div className=" text-gray-900 dark:text-white h-[95vh] flex flex-col justify-center items-center py-16">
      <div className="text-center mb-5">
        <h1 className="animate__animated animate__fadeInDown text-5xl md:text-6xl font-semibold mb-4">
          Hello, I am <span className="text-blue-500">Eric Wagner</span>
        </h1>
        <Fade delay={1000} cascade damping={0.1} triggerOnce>
          <div className="text-2xl md:text-4xl">A Full Stack Web Developer</div>
        </Fade>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/SparkkyJD"
          target="_blank"
          rel="noopener noreferrer"
          className=" animate__animated animate__fadeInUp text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-wagner-4950b8143/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate__animated animate__fadeInUp text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="mailto:sparkkyjd@gmail.com"
          className="animate__animated animate__fadeInUp text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <MdEmail size={32} />
        </a>
      </div>
    </div>
  );
}
