import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import "./title.css";


function Title() {
    return(
        <Container>
            <section className="titleContainer">
            <h1>Welcome to Escape-The-Dungeon!</h1>
            <h3>What will you do?</h3>
            <img className="img-thumbnail" src="./images/Weapon.jpeg" width="50" height="50" alt="weapon" />
            <Link
              to="/game"
              className={window.location.pathname === "/game" ? "nav-link active" : "nav-link"}
            >
              Start Game
            </Link>
            </section>
        </Container>
    )
}

export default Title;