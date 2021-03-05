import './App.css';
import Login from "./pages/Login";
import Title from "./pages/Title";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";


function App() {
  return (

  
    <Container>
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/title" component={Title} />
      <Route exact path="/game" component={Game} />
    </Router>
  </Container>
  );
}

export default App;
