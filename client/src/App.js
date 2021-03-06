import React from 'react';
import './App.css';
import Signup from "./pages/Signup";
import Title from "./pages/Title";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Youtube from "./pages/Youtube";
import About from "./pages/About";

function App() {
  return ( 
    <Container>
    <Router>
      <Route exact path="/" component={Signup} />
      <Route exact path="/title" component={Title} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/video" component={Youtube} />
      <Route exact path="/about" component={About} />
    </Router>
  </Container>
  );
}

export default App;
