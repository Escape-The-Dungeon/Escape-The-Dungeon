import './App.css';

import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Container from "./components/Container";
import Card from "./components/Card";


function App() {
  return (
    <Container>
      <Navbar />
       <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">
        <Question />
     </Card>
     </Container>
  );
}

export default App;
