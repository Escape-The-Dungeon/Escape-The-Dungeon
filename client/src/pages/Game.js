import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Card from "../components/Card";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import Row from "../components/Row";



function Game() {
    return (
      <Row>
        <Torches />
    <Container>
      <Navbar />
    
      <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">
       
        <Textbox />
      </Card>
    
      
    </Container>
    <Torches />
    </Row>
    )
}

export default Game;