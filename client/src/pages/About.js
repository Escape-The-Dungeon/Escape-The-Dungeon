import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Torches from "../components/Torches";
import "./title.css";
import { Link } from "react-router-dom";
import Row from "../components/Row"

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

        <section className="text col-md-8" >
          <p>Creators of the game:</p>
          <p>--------------------------------</p>
          <Row>
          <img src="images/pic.JPG" alt="Placeholder" className="profile col-md-4"></img>
          <p className="text-wrap col-md-6">Ashlyn Hicks is a hardworking coder who loves videogames. Her vivid imagination led to the creation of a large portion of this game's story.</p>
          </Row>
          <a href="https://github.com/jpls218" className="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/jonathan-smith-9498781ba/" class="fa fa-linkedin"></a>
          <br></br>
        

          {/* Picture */}
         
<Row>
            <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/File_000.jpeg" alt="Placeholder" className="profile col-md-4" />
            
    
            
            <p className="text-wrap col-md-6">Leandro Parrado is the coder/artist who created all of the illustrations seen in this game. He also helped write some of the story seen in the game.</p>
            </Row>
          <a href="https://github.com/Bokosyk" className="fa fa-github"></a>
          
          <a href="https://www.linkedin.com/in/leandro-parrado-a05729166/" class="fa fa-linkedin"></a>
          <br></br>
          
          
          <Row>
          <img src="images/jon.jpeg" alt="Placeholder" className="profile col-md-4"></img>
          <p className="text-wrap col-md-6">Jonathan Smith is a coder who helped edit and contribute to the overall style and design of the game.</p>
          </Row>
          <a href="https://github.com/jpls218" className="fa fa-github"></a>
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