import React from "react";
import { Progress } from "reactstrap";
import "./style.css";

function HealthBar() {
    
    return(
        <div id="healthbar">
            <Progress value={25} />
        </div>
    )
}

export default HealthBar;