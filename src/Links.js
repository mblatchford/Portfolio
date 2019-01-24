import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="links">
      <div> 
       <Link to="/about">About</Link>

      </div>
      <div>
        Projects
      </div>
    </div>
  );
};

export default Links;