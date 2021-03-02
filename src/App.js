import './App.css';



import Title from "./pages/Title";

import Question from "./components/Question";
import Container from "./components/Container";
import Card from "./components/Card";


function App() {
 
  return (

    <Title />


    <Container>
      <Card>
        <Question />
      </Card>
    </Container>



  );
}

export default App;
