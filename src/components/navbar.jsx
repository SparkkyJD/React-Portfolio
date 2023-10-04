"use client";

import { Navbar } from "flowbite-react";
import DarkModeToggle from "./DarkModeToggle";
import profilePic from "../assets/profilePic.png";

export default function NavbarWithCTAButton() {
  return (
    
    <Navbar className="border-b border-blue-500 bg-gray-200">
      <Navbar.Brand style={{ backgroundColor: 'black' }} className="rounded-lg">
        <img src={profilePic} alt="Logo" style={{ width: "60px", height: "60px" }} />
      </Navbar.Brand>

      <div className="flex md:order-2 ">
        <DarkModeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#about" className="">About</Navbar.Link>
        <Navbar.Link href="#portfolio">Projects</Navbar.Link>
        <Navbar.Link href="#skills">Skills</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
        <Navbar.Link href="https://docs.google.com/document/d/1gyiBfBXGS5xdtybFLfi1_jStVxhBq7msz9NOITdHtTI/edit?usp=sharing">
          Resume
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
