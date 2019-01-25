import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <div className="battleTanks-link">
        <Link to="/Projects/BattleTanks">
          <div
            style={{
              color: "red"
            }}
          >
            Battle
          </div>
          <div
            style={{
              color: "blue"
            }}
          >
            Tanks
          </div>
        </Link>
      </div>
      <div className="unscramble-link">
        <Link to="/Projects/ScrambleUn">
          <div
            style={{
              fontFamily: "Gaegu, cursive"
            }}
          >
            scramble
          </div>
          <div
            style={{
              fontFamily: "Gaegu, cursive",
              color: "rgba(0, 191, 255, 0.845)"
            }}
          >
            un
          </div>
        </Link>
      </div>

      <div className="parity-link">
        <Link to="/Projects/Parity">
          <div
            className="parity-link"
            style={{
              // fontFamily: 'Gaegu, cursive',
              fontFamily: "Press Start 2P, cursive"
            }}
            >
            Parity
          </div>
        </Link>
      </div>

      <div className="adventure-link">
        <Link to="/Projects/AdventchureTyme">
          <div
            className="adventure-link"
            style={{
              
            }}
            >
            AdventchureTyme
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
