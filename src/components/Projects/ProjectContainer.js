import React from "react";
import { Element } from "react-scroll";
import "./ProjectContainer.css";
const ProjectContainer = () => {
  return (
    <Element id="projects" className="project">
      <div className="project_container">
        <div className="project_box">
          <h2>Calculator</h2>
          <p>Don't worry about calculation</p>
          <a href="https://flamboyant-hermann-fc04e4.netlify.app/">
            Click here
          </a>
          <p className="frame">JavaScript</p>
        </div>
        <div className="project_box">
          <h2>To-do List</h2>
          <p>Don't forgot to do it</p>
          <a href="https://eager-mirzakhani-0fd54e.netlify.app/">Click here</a>
          <p className="frame">React.JS</p>
        </div>
      </div>
    </Element>
  );
};

export default ProjectContainer;
