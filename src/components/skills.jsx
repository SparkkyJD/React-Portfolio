import React from "react";
import { Bounce } from "react-awesome-reveal";
import {
  SiExpress,
  SiNodedotjs,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiPwa,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { GiApolloCapsule } from "react-icons/gi";
import {
  AiFillApi,
  AiOutlineConsoleSql,
} from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import {
  TbFileDatabase,
  TbServer,
} from "react-icons/tb";
import { FaKey } from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center dark:text-white">
      <h1 className="text-5xl font-semibold text-center mt-10">
        Featured Skills
      </h1>
      <h2 className="text-center">
        (All listed in resume)
      </h2>

      <div className="w-2/3 flex flex-wrap justify-center gap-4 mt-6">
      <Bounce triggerOnce>
        <div className="flex-1 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold ">Programming Languages</h2>
          <div className="flex items-center mt-2">
            <SiJavascript className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">JavaScript</span>
          </div>
          <div className="flex items-center mt-2">
            <SiTypescript className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">TypeScript</span>
          </div>
          <div className="flex items-center mt-2">
            <SiMysql className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">SQL</span>
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Web Development</h2>
          <div className="flex items-center mt-2">
            <SiGraphql className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">GraphQL</span>
          </div>
          <div className="flex items-center mt-2">
            <SiExpress className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">Express</span>
          </div>
          <div className="flex items-center mt-2">
            <GiApolloCapsule className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">Apollo</span>
          </div>
          <div className="flex items-center mt-2">
            <SiReact className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">React</span>
          </div>
          <div className="flex items-center mt-2">
            <SiNodedotjs className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">Node</span>
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Database Technologies</h2>
          <div className="flex items-center mt-2">
            <SiMongodb className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">MongoDB</span>
          </div>
          <div className="flex items-center mt-2">
            <AiOutlineConsoleSql className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">noSQL</span>
          </div>
          <div className="flex items-center mt-2">
            <SiMysql className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">SQL</span>
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold">API Integration</h2>
          <div className="flex items-center mt-2">
            <AiFillApi className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">Web/3rd party/server-side API</span>
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Software Concepts and Techniques</h2>
          <div className="flex items-center mt-2">
            <RiPagesLine className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">Object-Oriented Programming (OOP)</span>
          </div>
          <div className="flex items-center mt-2">
            <TbFileDatabase className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">Object-Relational Mapping (ORM)</span>
          </div>
          <div className="flex items-center mt-2">
            <TbServer className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">Model-View-Controller (MVC)</span>
          </div>
          <div className="flex items-center mt-2">
            <SiPwa className="text-4xl text-blue-500 mt-2 w-12 h-12" />
            <span className="ml-2 text-xl">Progressive Web Apps (PWA)</span>
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Authentication</h2>
          <div className="flex items-center mt-2">
            <FaKey className="text-4xl text-blue-500 w-12 h-12" />
            <span className="ml-2 text-xl">JSON Web Token (JWT)</span>
          </div>
        </div>
        </Bounce>
      </div>
      
    </div>
  );
}
