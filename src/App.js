import './App.css';
import Title from "./pages/Title";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Container from "./components/Container";
// import Card from "./components/Card";
// import Textbox from "./components/Textbox";
// import HomePageBtns from "./components/HomePageBtns";
// import HealthBar from "./components/HealthBar";




function App() {
  return (

    <Container>
      <Router>
        <Route exact path="/" component={Title} />
        <Route exact path="/game" component={Game} />
      </Router>
      {/* <Navbar /> */}

      {/* <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">
        <HealthBar />
        <Textbox />
        <HomePageBtns /> */}


      {/* </Card> */}

    </Container>
  );
}

export default App;
