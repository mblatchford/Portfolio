import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from './Links';

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

      <div className="github">
        <a href="https://github.com/mblatchford">
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            className="contact-icons"
          />
        </a>
      </div>
     
      <Links />
   
    </div>
  );
};

export default Contact;
