import React from 'react';
import Profile from "./assets/headshot.jpg";

const Headshot = () => {
    return (
        <img className="headshot" src= {Profile} alt="Profile of Michael" /> 
    );          
};

export default Headshot;