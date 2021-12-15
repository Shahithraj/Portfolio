import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <div>
      <Element id="skills" className="skillContainer">
        <div className="image">
          <img src="https://boagworld.com/wp-content/uploads/2013/09/mailchimp-515x343.jpg" />
        </div>
        <div className="skillContainer_text">
          <h2>SKILLSET</h2>

          <div className="skillContainer_skillset">
            <h4>React</h4>

            <div
              className="skillContainer_slider
     skillContainer_slider1"
            >
              <LinearProgress variant="determinate" value={20} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h4>JavaScript</h4>
            <div
              className="skillContainer_slider
     skillContainer_slider2"
            >
              <LinearProgress variant="determinate" value={70} />
            </div>{" "}
          </div>
          <div className="skillContainer_skillset">
            <h4>NodeJS</h4>
            <div
              className="skillContainer_slider
     skillContainer_slider3"
            >
              <LinearProgress variant="determinate" value={50} />
            </div>{" "}
          </div>
          <div className="skillContainer_skillset">
            <h4>MongoDb</h4>

            <div
              className="skillContainer_slider
     skillContainer_slider4"
            >
              <LinearProgress variant="determinate" value={40} />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default SkillContainer;
