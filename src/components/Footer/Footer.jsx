import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>nikhillakde2001@gmail.com</span>
        <div className="f-icons">
          < a href="https://www.linkedin.com/in/nikhil-lakde-65b99b1a9/" >
            <Linkdin color="white" size={"3rem"} />
          </a >

          <Insta color="white" size={"3rem"} />
          <a href="https://www.github.com/NikhilLakde" >
            <Gitub color="white" size={"3rem"} />
          </a >
        </div>
      </div>
    </div>
  );
};

export default Footer;
