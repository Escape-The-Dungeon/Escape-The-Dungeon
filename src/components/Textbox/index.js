import React from "react";
import "./style.css";
import TextBtns from "./components/TextBtns";

function Textbox() {
    return(
        <div>
        <p id="text-box">Welcome to Escape the Dungeon! Locked in a dungeon with unknown horrors, you're goal is too escape......and survive!</p>;
        <TextBtns />
        </div>
    )
}

export default Textbox;