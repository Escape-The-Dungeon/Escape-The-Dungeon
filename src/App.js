import './App.css';

import Navbar from "./components/Navbar";

import Container from "./components/Container";
import Card from "./components/Card";
import Textbox from "./components/Textbox";
import TextBtns from "./components/TextBtns";
import ProgressBar from "./components/ProgressBar"


function App() {
  
  
  return (
    <Container>
      <Navbar />

       <Card backgroundImage="https://cdn.pixabay.com/photo/2015/11/08/05/58/scroll-1033117_960_720.jpg">
         <Textbox />
         <TextBtns />
         <div>
           
            <ProgressBar />
          </div>
        
     </Card>

     </Container>
  );
}

export default App;
