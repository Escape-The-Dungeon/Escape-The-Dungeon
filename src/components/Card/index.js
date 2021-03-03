import React from "react";
import "./style.css";
import Textbox from "../Textbox";

function Card(props) {
  return (


    <div className="card" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
      {props.children}
      <Textbox />

    </div>
  );
}

export default Card;
