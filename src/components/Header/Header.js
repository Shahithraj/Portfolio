import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="header">
      <div className="header_left">
        <h1>Portfolio</h1>
      </div>
      <div className="toggle-btn" onClick={navbarClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={navbar ? "header_show" : "header_right"}>
        <Link to="about" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
};
export default Header;
