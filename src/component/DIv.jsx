import React from "react";

export default (props) => {
  let handleClick = () => {
    props.passFunction(props.id);
  };
  return (
    <div
      style={{ color: props.value === "x" ? "red" : "black" }}
      onClick={handleClick}
      className={props.className}
    >
      {props.value}
    </div>
  );
};
