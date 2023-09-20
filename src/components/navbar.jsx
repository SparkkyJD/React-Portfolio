"use client";

import { Navbar } from "flowbite-react";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo2.png";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      

      <Navbar.Brand>
      <img
              src={logo}
              alt="Logo"
              style={{ width: "60px", height: "60px" }}
            />

        
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkModeToggle/>
        <Navbar.Toggle />
        
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#portfolio">Projects</Navbar.Link>
        <Navbar.Link href="#skills">Skills</Navbar.Link>
        <Navbar.Link  href="#contact">Contact</Navbar.Link>
        <Navbar.Link  href="https://docs.google.com/document/d/1gyiBfBXGS5xdtybFLfi1_jStVxhBq7msz9NOITdHtTI/edit?usp=sharing">
          Resume</Navbar.Link>
          
      </Navbar.Collapse>
    </Navbar>
  );
}


