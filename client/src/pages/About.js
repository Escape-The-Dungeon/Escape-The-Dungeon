import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Torches from "../components/Torches";
import "./title.css";
import { Link } from "react-router-dom";

function About() {
  return ( 
    <div>
    <div>
            <Link

            to="/title"
            id="link"
            className={window.location.pathname === "/title" ? "nav-link active" : "nav-link"}

        >


            Back to HomePage!
            </Link >
            </div>
            
    <Container>
      <Navbar />
      <div id="torch">
          <Torches />
          </div>
          
            <section className="text">
            <p>Creators of the game:</p>
            <p>--------------------------------</p>
            <p>Ashlyn Hicks is a hardworking coder who loves videogames. Her vivid imagination led to the creation of a large portion of this game's story.</p>
            <a href="https://github.com/jpls218" class="fa fa-github"></a>
    <a href="https://www.linkedin.com/in/jonathan-smith-9498781ba/" class="fa fa-linkedin"></a>
            <br></br>
            <p>Leandro Parrado is the coder/artist who created all of the illustrations seen in this game. He also helped write some of the story seen in the game.</p>
            <a href="https://github.com/Bokosyk" class="fa fa-github"></a>
    <a href="https://www.linkedin.com/in/leandro-parrado-a05729166/" class="fa fa-linkedin"></a>
            <br></br>
            <p>Jonathan Smith is a coder who helped edit and contribute to the overall style and design of the game.</p>
            <a href="https://github.com/jpls218" class="fa fa-github"></a>
    <a href="https://www.linkedin.com/in/jonathan-smith-9498781ba/" class="fa fa-linkedin"></a>
    </section>
          
          
      <div id="torches">
          <Torches />
      </div>
    </Container>  
    </div>
  )
}

export default About;