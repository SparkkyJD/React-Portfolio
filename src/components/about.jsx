import React from "react";
import ME from "../assets/Me.jpg";
import "animate.css";

export default function About() {
  return (
    <section className="h-[95vh]" >
      <h2 className=" dark:text-white font-bold my-20 text-center text-5xl">About Me</h2>
      <div id="about" className="container mx-auto p-4 lg:p-0 " >
        <div className="lg:flex lg:justify-center lg:items-center lg:space-x-10">
          <img
            src={ME}
            alt="me"
            className=" flex justify-center animate__animated animate__bounceInLeft border-8 rounded-full border-blue-500" 
            style={{ width: "400px", height: "400px" }}
          />
          <div className="dark:text-white lg:w-1/2 animate__animated animate__bounceInRight m-4 lg:m-0">
            
            <p className="lg:text-xl mb-4">
              As a U.S. Navy Veteran with a background in maintaining Secret
              Level Aircraft and a recent graduate of the University of Chapel
              Hill's Full Stack Web Developer Bootcamp, I bring a unique blend 
              of technical expertise.
            </p>
            <p className="lg:text-xl mb-4">
              My experience as a Technician for 10+ years has equipped me with
              the ability to efficiently solve complex problems and approach
              tasks with creative thinking. This background, combined with my
              newfound passion for Web Development, makes me excited to fully
              transition into the field of Full Stack Web Development.
            </p>
            <p className="lg:text-xl mb-4">
            I enjoy the challenges presented by Web Development and am eager to 
            apply my problem-solving skills and attention to detail to a dynamic 
            team. My commitment to excellence is further fueled by my 
            dedication to continuous learning in this rapidly evolving field.
            </p>
            <button
              type="button"
              onClick={() => {
                const contactForm = document.getElementById("contact");
                if (contactForm) {
                  contactForm.scrollIntoView();
                }
              }}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Let's Connect!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
