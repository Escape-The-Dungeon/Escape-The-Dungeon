import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Card from "../components/Card";
import Textbox from "../components/Textbox";

import HealthBar from "../components/HealthBar";

function Game() {
    return (
    <Container>
      <Navbar />

      <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">  
        <HealthBar />
        
        <Textbox />
        


      </Card>

    </Container>
    )
}

export default Game;