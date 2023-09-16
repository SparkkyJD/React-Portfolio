import React from 'react';
import { BsGithub, BsFiletypeJs, BsFiletypeJsx, BsFiletypeSql, BsFiletypeHtml, BsFiletypeCss, BsServer, BsFillHexagonFill } from 'react-icons/bs';
import { SiHandlebarsdotjs, SiExpress, SiNodedotjs, SiGraphql, SiMysql, SiMongodb, SiReact, SiPwa, SiVitest, SiJest, SiHeroku, SiNetlify, SiGithubpages} from 'react-icons/si';
import { GiApolloCapsule} from 'react-icons/gi'
import { AiFillApi, AiOutlineConsoleSql, AiOutlineEye} from 'react-icons/ai'
import { RiPagesLine} from 'react-icons/ri'
import { TbFileDatabase, TbSettings, TbServer, TbArrowNarrowRight, TbBrandVscode, TbPrompt} from 'react-icons/tb'
import { FaKey} from 'react-icons/fa'
const Skills = () => {
    return (
        <div className="flex flex-col pt-5 ">
                <h2 className="text-4xl">Version Control</h2>
                <h3 className="text-3xl"> <BsGithub />Github </h3>
                <br></br>


                <h2 className="text-4xl">Programming Languages</h2>
                <h3 className="text-3xl"><BsFiletypeJs />JavaScript</h3>
                <h3 className="text-3xl"><BsFiletypeJsx />TypeScript</h3>
                <h3 className="text-3xl"><BsFiletypeSql />mySql</h3>
                <br></br>

                <h2 className="text-4xl">Web Development Technologies</h2>
                <h3 className="text-3xl"><BsFiletypeHtml />HTML</h3>
                <h3 className="text-3xl"><BsFiletypeCss />CSS</h3>
                <h3 className="text-3xl"><SiExpress />Express</h3>
                <h3 className="text-3xl"><SiNodedotjs />Node</h3>
                <h3 className="text-3xl"><SiHandlebarsdotjs />Handlebars</h3>
                <h3 className="text-3xl"><SiGraphql/>GraphQL</h3>
                <h3 className="text-3xl"><GiApolloCapsule />Apollo</h3>
                <br></br>

                <h2 className="text-4xl">Database Technologies</h2>
                <h3 className="text-3xl"><SiMysql />SQL</h3>
                <h3 className="text-3xl"><AiOutlineConsoleSql />noSQL</h3>
                <h3 className="text-3xl"><SiMongodb />MongoDB</h3>
                <br></br>

                <h2 className="text-4xl">API Integration</h2>
                <h3 className="text-3xl"><AiFillApi />Web/3rd party/server-side API</h3>
                <br></br>

                <h2 className="text-4xl">Software Development Concepts and Techniques</h2>
                <h3 className="text-3xl"><RiPagesLine />Object-Oriented Programming (OOP)</h3>
                <h3 className="text-3xl"><TbFileDatabase />Object-Relational Mapping (ORM)</h3>
                <h3 className="text-3xl"><TbSettings /><TbArrowNarrowRight /><AiOutlineEye /><TbArrowNarrowRight /><TbServer />Model-View-Controller (MVC)</h3>
                <h3 className="text-3xl"><SiPwa />Progressive Web Apps (PWA)</h3>
                <br></br>

                <h2 className="text-4xl">Frontend Development</h2>
                <h3 className="text-3xl"><SiReact />React</h3>
                <br></br>

                <h2 className="text-4xl">Authentication</h2>
                <h3 className="text-3xl"><FaKey />JSON Web Token (JWT)</h3>
                <br></br>

                <h2 className="text-4xl">Build Tools</h2>
                <h3 className="text-3xl"><SiVitest />Vite</h3>
                <br></br>

                <h2 className="text-4xl">Testing</h2>
                <h3 className="text-3xl"><SiJest />Jest</h3>
                <br></br>

                <h2 className="text-4xl">Deployment and Hosting</h2>
                <h3 className="text-3xl"><SiHeroku />Heroku</h3>
                <h3 className="text-3xl"><SiNetlify />Netlify</h3>
                <h3 className="text-3xl"><SiGithubpages />Github Pages</h3>
                <br></br>

                <h2 className="text-4xl">Development Environment</h2>
                <h3 className="text-3xl"><TbBrandVscode />Visual Studio Code</h3>
                <h3 className="text-3xl"><TbPrompt />Command line proficiency</h3>
                <br></br>

                <h2 className="text-4xl">Soft Skills</h2>
                <h3 className="text-3xl"><BsFiletypeHtml />Problem Solving </h3>
                <h3 className="text-3xl"><BsFiletypeHtml />Collaboration and Teamwork</h3>
                <h3 className="text-3xl"><BsFiletypeHtml />Effective Communication</h3>
                <h3 className="text-3xl"><BsFiletypeHtml />Adaptability and continuous learning</h3>
             
            </div>
    
    );
}

export default Skills;