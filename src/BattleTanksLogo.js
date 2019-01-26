import React from "react";

const BattleTanksLogo = (props) => {
  return (
    <div className={props.class}>
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
    </div>
  );
};

export default BattleTanksLogo;
