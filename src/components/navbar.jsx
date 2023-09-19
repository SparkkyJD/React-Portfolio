import React, { useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo2.png";
import { Collapse } from "flowbite";

function Navbar() {
  const triggerElementRef = useRef(null);
  const targetElementRef = useRef(null);

  useEffect(() => {
    const collapse = new Collapse(
      targetElementRef.current,
      triggerElementRef.current
    );

    const handleToggleClick = () => {
      collapse.toggle();
    };

    triggerElementRef.current.addEventListener("click", handleToggleClick);

    setTimeout(() => {
      triggerElementRef.current.style.display = "none";
      triggerElementRef.current.offsetHeight;
      triggerElementRef.current.style.display = ""; 
    }, 10);

    return () => {
      triggerElementRef.current.removeEventListener("click", handleToggleClick);
    };
  }, []);

  return (
    <nav className="navbar bg-primary fixed top-0 left-0 w-full z-50">
      <div className="dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            ref={triggerElementRef}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
            ref={targetElementRef}
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 
          md:mt-0 md:border-0 bg-transparent dark:bg-transparent"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1gyiBfBXGS5xdtybFLfi1_jStVxhBq7msz9NOITdHtTI/edit?usp=sharing"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent"
                >
                  Contact Me
                </a>
              </li>
              <DarkModeToggle />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
