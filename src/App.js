
import './App.css';
import Companies from './Components/Companies/Companies';
import Header from './Components/Header/Header';
import Hero from './Components/Herosection/Hero';
import Residencies from './Components/Residencies/Residencies';


function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Companies/>
    <Residencies/>
    
    </div>
  );
}

export default App;
