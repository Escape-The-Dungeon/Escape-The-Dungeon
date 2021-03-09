import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Card from "../components/Card";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import "./torch.css";


function About() {
  return ( 
    <Container>
      <Navbar />
      <div id="torch">
          <Torches />
          </div>
          <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">
            <Textbox />
          </Card>
      <div id="torches">
          <Torches />
      </div>
    </Container>  
  )
}

export default About;