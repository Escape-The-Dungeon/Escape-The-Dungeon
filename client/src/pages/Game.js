import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Card from "../components/Card";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import Row from "../components/Row";
import Col from "../components/Col";


function Game() {
  return (
    <Container>
      <Navbar />
      <Col>
        <Row>
          <Torches />
        </Row>
      </Col>
      <Col>
        <Row>
          <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">

            <Textbox />
          </Card>
        </Row>
      </Col>
      <Col>
        <Row>
          <Torches />
        </Row>
      </Col>
    </Container>
  )
}

export default Game;