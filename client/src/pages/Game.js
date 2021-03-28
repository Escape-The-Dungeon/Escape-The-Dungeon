import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import "./torch.css";


class Game extends React.Component {


  render() {
    console.log(this)
    return (

      <Container>
        <Navbar />
        <div id="torch">
          <Torches />
        </div>

        <Textbox story={this.props.story} />

        <div id="torches">
          <Torches />
        </div>
      </Container>
    )

  }
}

export default Game;