import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Torches from "../components/Torches";
import "./title.css";


function About() {
  return ( 
    <Container>
      <Navbar />
      <div id="torch">
          <Torches />
          </div>
          
            
            <p id="text">Creators of the game:</p>
            <p id="text">--------------------------------</p>
            <p id="text">Ashlyn Hicks is a hardworking coder who loves videogames. Her vivid imagination led to the creation of a large portion of this game's story.</p>
            <br></br>
            <p id="text">Leandro Parrado is the masterful artist who created all of the illustrations seen in this game. He also helped write some of the story seen in the game.</p>
            <br></br>
            <p id="text">Jonathan Smith is a coder who helped edit and contribute to the overall style and design of the game.</p>
          
          
      <div id="torches">
          <Torches />
      </div>
    </Container>  
  )
}

export default About;