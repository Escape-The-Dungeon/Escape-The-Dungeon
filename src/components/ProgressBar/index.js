import React from "react";
import {Progress} from "reactstrap";

function ProgressBar(){
    return (
      <div className="progress-bar">
        <Progress value={100} />
      </div>
    )
  }

  export default ProgressBar;