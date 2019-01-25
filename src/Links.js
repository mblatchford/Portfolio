import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="links">
      <div> 
       <Link to="/About">About</Link>

      </div>
      <div>
      <Link to="/Projects">Projects</Link>

      </div>
    </div>
  );
};

export default Links;