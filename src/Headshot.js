import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from "./assets/headshot.jpg";

const Headshot = () => {
  return (
    <div className="headshot-container">
      <img className="headshot" src={Profile} alt="Profile of Michael" />
    </div>
  );
};

export default Headshot;
