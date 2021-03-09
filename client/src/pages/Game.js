import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Card from "../components/Card";
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
          <Card>
            <Textbox />
          </Card>
      <div id="torches">
          <Torches />
      </div>
    </Container>  
  )
}

export default Game;