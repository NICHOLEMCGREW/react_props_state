import * as React from "react";

const Box = (props) => {
  return (
    <div
    id={props.id}
    onClick={props.handleColorChange}
      style={{
        width: "180px",
        height: "180px",
        backgroundColor: props.color,
        border: "1px solid black",
        display: "inline-block",
      }}
    >
      <span>{props.color}</span>
    </div>
  );
};

export default Box;
