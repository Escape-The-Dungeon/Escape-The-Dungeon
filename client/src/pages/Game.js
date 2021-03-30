import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import "./torch.css";


function Game() {
  return ( 
    <Container>
      <Navbar />
      <div id="torch">
          <Torches />
          </div>
         
            <Textbox />
          
      <div id="torches">
          <Torches />
      </div>
    </Container>  
  )
}

export default Game;