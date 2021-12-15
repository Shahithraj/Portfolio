import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact_container">
          <p>
            Email :<span>shahithr99@gmail.com</span>
          </p>
          <p>
            Phone No :<span>9080203657</span>
          </p>

          <div className="contact_icons">
            <a href="https://www.linkedin.com/in/shahith-r-821920219/">
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a href="https://github.com/Shahithraj">
              <IconButton>
                <GitHub />
              </IconButton>
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Contact;
