import React from 'react';
import { Fade } from "react-awesome-reveal";
import 'animate.css';

export default function Intro() {
  return (
    <div className="text-gray-900 dark:text-blue-700 h-[85vh] flex flex-col justify-center items-center">
      <div className="text-center mt-20 mb-20">
        <h1 className="animate__animated animate__fadeInDown text-6xl font-bold mb-4">
          Hello, I am <span className="text-blue-500">Eric Wagner</span>
        </h1>
        <Fade delay={1000} cascade damping={0.1}>
          <div className="text-4xl">A Full Stack Web Developer</div>
        </Fade>
      </div>
    </div>
  );
}
