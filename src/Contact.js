import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Contact = () => {
  // let divStyle = {
  //   backgroundColor: 'rgba(255, 255, 255, 0)',
  //   color: 'white'
  // }
  return (
    <div className="contact">
      <div className="envelope">
        <a href="mailto:Michael.Blatchford@Olympian.org?Subject=Schedule%20a%20meeting">
          <FontAwesomeIcon icon="envelope" className="contact-icons" />
        </a>
      </div>

      <div className="linkedin">
        <a href="https://www.linkedin.com/in/mblatchford2008oly">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="contact-icons"
          />
        </a>
      </div>

      {/* <div className="resume">
        <a href="./home">
          <FontAwesomeIcon icon="home" className="contact-icons" />
        </a>
        Home

      </div> */}
      
        <Link to="/">
        <div className="goHome">
          <FontAwesomeIcon icon="home" className="contact-icons" />
            Home
        </div>
        </Link>

      <div className="goBack">
          <FontAwesomeIcon icon="caret-square-left" className="contact-icons" 
          onClick={()=> {window.history.back()}}/>
        Back
      </div>

      <div className="github">
        <a href="https://github.com/mblatchford">
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            className="contact-icons"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
