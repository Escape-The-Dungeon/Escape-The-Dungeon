import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
      {props.children}
    </div>
  );
}

export default Card;
