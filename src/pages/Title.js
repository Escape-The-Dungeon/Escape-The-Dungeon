import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function Title() {
    return(
        <Container>
            <Row>
                <Col size="md-4">
                    <h1>Welcome to Escape-The-Dungeon!</h1>
                    <Card />
                </Col>
                <Col size="md-2">
                    <h3>What will you do?</h3>
                <img className="img-thumbnail" src="./images/Weapon.jpeg" width="50" height="50" alt="weapon" />
                </Col>
            </Row>
        </Container>
    )
}

export default Title;