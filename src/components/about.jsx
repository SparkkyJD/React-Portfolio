import React from 'react';
import ME from '../assets/Me.jpg';
import 'animate.css';

export default function about() {
  return (
    <section>
      <div className="container about__container dark:text-white">
        <div className="about__me flex justify-center">
          <div className="about__me-image mt-20 ">
            <img src={ME} alt="me" className="animate__animated animate__bounceInLeft"/>
          </div>
        </div>
        <div className="animate__animated animate__bounceInRight m-20">
          <p>As a U.S. Navy Veteran with a background in maintaining Secret Level Aircraft, and a recent graduate of University of Chapel Hill's Full Stack Web Developer Bootcamp, 
            with an overall grade of 96%, I bring a unique blend of technical expertise.
            <br></br><br></br>
            My experience as a Technician for 10+ years has equipped me with the ability to efficiently solve complex problems and approach tasks with creative thinking.
            This background, combined with my newfound passion for Web Development makes me exited to fully transition into the field of Full Stack Web Development.
            <br></br><br></br>
            I am deeply enthusiastic about the challenges that Web Development provides and am eager to bring my problem-solving skills, attention to detail,
            and commitment to excellence to a dynamic team. I am excited to contribute to innovative projects and continuously learn in this fast-paced and ever-evolving field.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Connect!</a>
        </div>
        
      </div>
    </section>
  )
}

