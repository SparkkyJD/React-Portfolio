import React from 'react';
import ME from '../assets/Me.jpg';
import 'animate.css';

export default function About() {
  return (
    <section>
      
      <div className="container mx-auto dark:text-white p-4 lg:p-0">
        <div className="lg:flex lg:justify-center lg:items-center lg:space-x-10">
          <div className="">
            <div className="">
              <img
                src={ME}
                alt="me"
                className="animate__animated animate__bounceInLeft lg:max-w-2xl lg:h-1/2 lg:w-2/3 rounded-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 animate__animated animate__bounceInRight m-4 lg:m-0">
          <h2 className="font-bold my-20 text-center text-5xl">About Me</h2>
            <p className="text-xl lg:text-2xl mb-4">
              As a U.S. Navy Veteran with a background in maintaining Secret Level Aircraft and a recent graduate of the University of Chapel Hill's Full Stack Web Developer Bootcamp, with an overall grade of 96%, I bring a unique blend of technical expertise.
            </p>
            <p className="text-xl lg:text-2xl mb-4">
              My experience as a Technician for 10+ years has equipped me with the ability to efficiently solve complex problems and approach tasks with creative thinking. This background, combined with my newfound passion for Web Development, makes me excited to fully transition into the field of Full Stack Web Development.
            </p>
            <p className="text-xl lg:text-2xl mb-4">
              I am deeply enthusiastic about the challenges that Web Development provides and am eager to bring my problem-solving skills, attention to detail, and commitment to excellence to a dynamic team. I am excited to contribute to innovative projects and continuously learn in this fast-paced and ever-evolving field.
            </p>
            <button type="button" href="contact" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Let's Connect!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
