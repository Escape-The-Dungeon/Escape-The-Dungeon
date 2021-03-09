import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import "./title.css";
import Torches from "../components/Torches";



function Title() {
  let userCookie = document.cookie.split(';').filter((cookii) => cookii.includes('username'))
  let username;
  if (userCookie[0]) {
    username = userCookie[0].split('=')[1] || "Unknown Entity";
  } else {
    username = "Unknown Entity"
  }
  return (
    <Container>
      <section className="titleContainer">
      <div id="torch">
        <Torches />
        </div>
        <h1>Welcome to Escape-The-Dungeon, {username}!</h1>
        <h3>What will you do?</h3>
        <img className="img-thumbnail" src="./images/background.png" alt="weapon" />
        <Link
          to="/game"
          className={window.location.pathname === "/game" ? "nav-link active" : "nav-link"}
        >
          Start Game
            </Link>
        <div id="torches">
        <Torches  />
        </div> 
      </section>
    </Container>
  )
}

export default Title;