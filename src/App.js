import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Question from "./components/Question";
import Container from "./components/Container";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
    <Container>
      
      <Card>
      <Question />
      </Card>
      </Container>
      </div>
      </Router>
  );
}

export default App;
