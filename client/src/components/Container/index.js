import React from "react";
import "./styles.css";

function Container(props) {
  return <div className="flex container" style={props.style}>{props.children}</div>;
}

export default Container;
