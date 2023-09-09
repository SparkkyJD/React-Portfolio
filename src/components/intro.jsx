import { Fade } from "react-awesome-reveal";
import 'animate.css';

export default function Intro() {
  return (
    <>
      <div className="flex justify-center text-center text-white h-screen lg:h-auto md:h-1/2 sm:h-1/4">
        <div className="self-center">
          <h1 className="animate__animated animate__fadeInDown text-6xl">
            Hello, I'm Eric Wagner
          </h1>
          <Fade delay={1e3} cascade damping={1e-1}>
            <div className="text-6xl">Full Stack Web Developer</div>
          </Fade>
        </div>
      </div>
    </>
  );
}
