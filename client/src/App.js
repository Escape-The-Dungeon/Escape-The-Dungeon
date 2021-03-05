import React from 'react';
import './App.css';
import Signup from "./pages/Signup";
import Title from "./pages/Title";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";


function App() {
  return (

  
    <Container>
    <Router>
      <Route exact path="/" component={Signup} />
      <Route exact path="/title" component={Title} />
      <Route exact path="/game" component={Game} />
    </Router>
  </Container>
  );
}

export default App;
