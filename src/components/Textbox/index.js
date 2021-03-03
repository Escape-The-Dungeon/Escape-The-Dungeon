import React from "react";
import "./style.css";

function Textbox() {
    return (
        <section className="container">
            <div id="text-box">Welcome to Escape the Dungeon! Locked in a dungeon with unknown horrors, you're goal is too escape......and survive!
            <div id="option-buttons" className="btn-grid">
                    <button className="btn">Option 1</button>
                    <button className="btn">Option 2</button>
                    <button className="btn">Option 3</button>
                    <button className="btn">Option 4</button>
                </div>
            </div>

        </section>

    )
}

export default Textbox;