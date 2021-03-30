import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Textbox from "../components/Textbox";
import Torches from "../components/Torches";
import "./torch.css";
import API from "./utils/API";


class Game extends React.Component {
  componentDidMount() {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    this.state.story = API.getAllStories()[0]
  }

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