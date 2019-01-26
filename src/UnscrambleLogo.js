import React from "react";

const UnscrambleLogo = (props) => {
  return (
    <div className={props.class} >
      <div
        style={{
          color: 'dimgrey'
        }}
      >
        scramble
      </div>
      <div
        style={{
          color: "rgba(0, 191, 255, 0.845)"
        }}
      >
        un
      </div>
    </div>
  );
};

export default UnscrambleLogo;
