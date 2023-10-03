import React from "react";
import { Carousel } from "flowbite-react";
import { BsGithub, BsFiletypeCss, BsFillBookFill } from "react-icons/bs";
import {
  SiHandlebarsdotjs,
  SiExpress,
  SiNodedotjs,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiPwa,
  SiVitest,
  SiJest,
  SiHeroku,
  SiInsomnia,
  SiNetlify,
  SiGithubpages,
  SiJavascript,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";
import { GiApolloCapsule } from "react-icons/gi";
import {
  AiFillApi,
  AiOutlineConsoleSql,
  AiOutlineEye,
  AiOutlineTeam,
  AiOutlineComment,
} from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import {
  TbFileDatabase,
  TbSettings,
  TbServer,
  TbArrowNarrowRight,
  TbBrandVscode,
  TbPrompt,
} from "react-icons/tb";
import { FaKey, FaLightbulb } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <div id="skills" className="dark:text-white">
        <h1 className="flex justify-center text-5xl font-semibold text-center ">
          Skills
        </h1>

        <div className="bg-gray-600 rounded-lg shadow-md flex justify-center items-center h-[400px] mx-[10%]">
          <Carousel slideInterval={1500000}>

            <div data-carousel-item className="flex flex-row flex-start">
              <div className="p-4 ">
                <h2 className="text-2xl font-semibold flex justify-center ">
                  Version Control
                </h2>
                <div className="flex items-center">
                  <BsGithub className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">GitHub</span>
                </div>
              </div>

              <div className="p-4 ">
                <h2 className="text-2xl font-semibold">
                  Programming Languages
                </h2>
                <div className="flex items-center">
                  <SiJavascript className="text-4xl text-yellow-500" />
                  <span className="ml-2 text-xl">JavaScript</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiTypescript className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">TypeScript</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiMysql className="text-4xl text-green-500" />
                  <span className="ml-2 text-xl">SQL</span>
                </div>
              </div>

              <div className="p-4 ">
                <h2 className="text-2xl font-semibold">
                  Web Development Technologies
                </h2>
                <div className="flex items-center">
                  <SiHtml5 className="text-4xl text-red-500" />
                  <span className="ml-2 text-xl">HTML</span>
                </div>
                <div className="flex items-center mt-2">
                  <BsFiletypeCss className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">CSS</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiExpress className="text-4xl text-purple-500" />
                  <span className="ml-2 text-xl">Express</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiNodedotjs className="text-4xl text-green-500" />
                  <span className="ml-2 text-xl">Node</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiHandlebarsdotjs className="text-4xl text-orange-500" />
                  <span className="ml-2 text-xl">Handlebars</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiGraphql className="text-4xl text-pink-500" />
                  <span className="ml-2 text-xl">GraphQL</span>
                </div>
                <div className="flex items-center mt-2">
                  <GiApolloCapsule className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">Apollo</span>
                </div>
              </div>
            </div>


            <div data-carousel-item className="flex flex-row flex-start">
              <div className="p-4">
                <h2 className="text-2xl font-semibold">
                  Database Technologies
                </h2>
                <div className="flex items-center">
                  <SiMysql className="text-4xl text-purple-500" />
                  <span className="ml-2 text-xl">SQL</span>
                </div>
                <div className="flex items-center mt-2">
                  <AiOutlineConsoleSql className="text-4xl text-green-500" />
                  <span className="ml-2 text-xl">noSQL</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiMongodb className="text-4xl text-green-500" />
                  <span className="ml-2 text-xl">MongoDB</span>
                </div>
              </div>

              <div className="p-4 ">
                <h2 className="text-2xl font-semibold">API Integration</h2>
                <div className="flex items-center mt-2">
                  <AiFillApi className="text-4xl text-blue-600" />
                  <span className="ml-2 text-xl">
                    Web/3rd party/server-side API
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <SiInsomnia className="text-4xl text-blue-600" />
                  <span className="ml-2 text-xl">Insomnia</span>
                </div>
              </div>

              <div className="p-4 " >
                <h2 className="text-2xl font-semibold">
                  Software Development Concepts and Techniques
                </h2>

                <div className="flex items-center">
                  <RiPagesLine className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">
                    Object-Oriented Programming (OOP)
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <TbFileDatabase className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">
                    Object-Relational Mapping (ORM)
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <TbSettings />
                  <TbArrowNarrowRight />
                  <AiOutlineEye />
                  <TbArrowNarrowRight />
                  <TbServer className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">
                    Model-View-Controller (MVC)
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <SiPwa className="text-4xl text-yellow-500" />
                  <span className="ml-2 text-xl">
                    Progressive Web Apps (PWA)
                  </span>
                </div>
              </div>
            </div>


            <div data-carousel-item className="flex flex-row items-center">
              <div className="p-4">
                <h2 className="text-2xl font-semibold">Frontend Development</h2>
                <div className="flex items-center mt-2">
                  <SiReact className="text-4xl text-blue-400" />
                  <span className="ml-2 text-xl">React</span>
                </div>
              </div>

              <div className="p-4 ">
                <h2 className="text-2xl font-semibold">Authentication</h2>
                <div className="flex items-center mt-2">
                  <FaKey className="text-4xl text-red-500" />
                  <span className="ml-2 text-xl">JSON Web Token (JWT)</span>
                </div>
              </div>

              <div className="p-4 ">
                <h2 className="text-2xl font-semibold">Build Tools</h2>
                <div className="flex items-center mt-2">
                  <SiVitest className="text-4xl text-yellow-500" />
                  <span className="ml-2 text-xl">Vite</span>
                </div>
              </div>
            </div>

            <div data-carousel-item className="flex flex-row items-center">
              <div className="p-4 " >
                <h2 className="text-2xl font-semibold">Testing</h2>
                <div className="flex items-center mt-2">
                  <SiJest className="text-4xl text-red-600" />
                  <span className="ml-2 text-xl">Jest</span>
                </div>
              </div>

              <div className="p-4 " >
                <h2 className="text-2xl font-semibold">
                  Deployment and Hosting
                </h2>

                <div className="flex items-center">
                  <SiHeroku className="text-4xl text-blue-400" />
                  <span className="ml-2 text-xl">Heroku</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiNetlify className="text-4xl text-blue-400" />
                  <span className="ml-2 text-xl">Netlify</span>
                </div>
                <div className="flex items-center mt-2">
                  <SiGithubpages className="text-4xl text-blue-400" />
                  <span className="ml-2 text-xl">GitHub Pages</span>
                </div>
              </div>
              
              <div className="p-4 " >
                <h2 className="text-2xl font-semibold">
                  Development Environment
                </h2>
                <div className="flex items-center mt-2">
                  <TbBrandVscode className="text-4xl text-blue-500" />
                  <span className="ml-2 text-xl">Visual Studio Code</span>
                </div>
                <div className="flex items-center mt-2">
                  <TbPrompt className="text-4xl text-purple-500" />
                  <span className="ml-2 text-xl">Command line proficiency</span>
                </div>
              </div>
            </div>


            <div className="p-4 " data-carousel-item>
              <h2 className="text-2xl font-semibold">Soft Skills</h2>
              <div className="flex items-center">
                <FaLightbulb className="text-4xl text-yellow-400" />
                <span className="ml-2 text-xl">Problem Solving</span>
              </div>
              <div className="flex items-center mt-2">
                <AiOutlineTeam className="text-4xl text-green-500" />
                <span className="ml-2 text-xl">Collaboration and Teamwork</span>
              </div>
              <div className="flex items-center mt-2">
                <AiOutlineComment className="text-4xl text-blue-500" />
                <span className="ml-2 text-xl">Effective Communication</span>
              </div>
              <div className="flex items-center mt-2">
                <BsFillBookFill className="text-4xl text-blue-500" />
                <span className="ml-2 text-xl">
                  Adaptability and Continuous Learning
                </span>
              </div>
            </div>


          </Carousel>
        </div>
      </div>
    </>
  );
}
