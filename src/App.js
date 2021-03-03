import './App.css';

import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Container from "./components/Container";
import Card from "./components/Card";


function App() {
  return (
    <Container>
      <Navbar />
       <Card>
        <Question />
     </Card>
     </Container>
  );
}

export default App;
