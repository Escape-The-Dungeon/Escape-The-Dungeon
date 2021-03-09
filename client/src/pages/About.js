import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Card from "../components/Card";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import "./title.css";


function About() {
  return ( 
    <Container>
      <Navbar />
      <div id="torch">
          <Torches />
          </div>
          <Card>
            
            <p id="text">Creators of the game:</p>
            <p id="text">Ashlyn Hicks is a hardworking coder who loves videogames. Her vivid imagination led to the creation of a large portion of this game's story.</p>
            <p id="text">Leandro Parrado is the masterful artist who created all of the illustrations seen in this game. He also helped write some of the story seen in the game.</p>
            <p id="text">Jonathan Smith is a coder who helped edit and contribute to the overall style and design of the game.</p>
          
          </Card>
      <div id="torches">
          <Torches />
      </div>
    </Container>  
  )
}

export default About;