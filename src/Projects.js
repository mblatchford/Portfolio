import React from "react";
import { Link } from "react-router-dom";
import BattleTanksLogo from "./BattleTanksLogo";
import UnscrambleLogo from "./UnscrambleLogo";
import AdventchureTymeLogo from "./AdventchureTymeLogo";
import ParityLogo from "./ParityLogo";

const Projects = () => {
  return (
    <div className="projects">
      <div className="battleTanks-link">
        <Link to="/BattleTanks">
          <BattleTanksLogo />
        </Link>
      </div>
      <div className="unscramble-link">
        <Link to="/ScrambleUn">
          <UnscrambleLogo />
        </Link>
      </div>

      <div className="parity-link">
        <Link to="/Parity/">
          <ParityLogo />
        </Link>
      </div>

      <div className="adventure-link">
        <Link to="/AdventchureTyme">
          <AdventchureTymeLogo />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
