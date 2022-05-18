import React from "react";
import "./TopContent.css";
import { Element } from "react-scroll";

const TopContent = () => {
  return (
    <Element name="about" className="firstpage">
      <div className="top-content">
        <div className="topcontent-container">
          <p>Hey! I am</p>
          <h1>Shahith R</h1>
          <p>A Professional Web Developer</p>
          <a href="https://drive.google.com/file/d/1AtkO2_PqrObpho20bYmXLUeq7cEMNJPk/view?usp=sharing">
            <button>Resume</button>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default TopContent;
