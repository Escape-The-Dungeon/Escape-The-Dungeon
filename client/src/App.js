import React from 'react';
import './App.css';
import Signup from "./pages/Signup";
import Title from "./pages/Title";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Youtube from "./pages/Youtube";
import About from "./pages/About";
import API from "./utils/API";

class App extends React.Component {
  state = {
    story: [{
      "id": 7,
      "img": "./images/Scene06.png",
      "blob": "You dare to investigate the humming and continue down the expansive hallway. Stepping through the doorway, the humming ceases immediately. You gaze upon a damp, dimly lit office with a hospital bed in the far left corner, medical equipment strewn about the floor and on a desk in the center of the room facing you. A man sits in its chair, scribbling hastily into a notebook. Garbed in a black cloak and a white beak-like mask, you can only assume you are looking at the doctor the gargoyle spoke of. “Ah, come in, come in..”, he says, beckoning you with a gesture of his hand. The iron door behind you clangs shut as two skeletal beings flank you. “You’ve saved me the trouble of fetching you. The infection runs rampant within you.. But I believe I have the cure.” He walks over to you, his hand snaps up from behind the book he was reading and touches your arm.Your world turns dark as his deadly grip drains you of life. Your journey has come to an abrupt end; your body eventually becoming one of the doctors frightful creations. THE END",
      "options": [
        {
          "name": "Start Over",
          "next": 0
        },
        {
          "name": "End Game",
          "next": 0
        }
      ]
    }]
  }

  componentDidMount() {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    this.state.story = API.getAllStories()[0]
  }
  render() {
    console.log(this.state.story);
    return (
      <Container>
        <Router>
          <Route exact path="/" component={Signup} />
          <Route exact path="/title" component={Title} />
          <Route exact path="/game">
            <Game story={this.state.story} />
          </Route>
          <Route exact path="/video" component={Youtube} />
          <Route exact path="/about" component={About} />
        </Router>
      </Container>
    );
  }

}

export default App;
