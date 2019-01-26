import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <div className='about-link'>
        <Link to="/">About</Link>
      </div>
      <div className='projects-link'>
        <Link to="/Projects">Projects</Link>
      </div>
    </div>
  );
};

export default Links;
