import React from "react";
import "./style.css";
import Question from "../Question";

function Card(props) {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
      {props.children}
      <Question />
    </div>
  );
}

export default Card;
