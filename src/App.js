
import './App.css';
import Companies from './Components/Companies/Companies';
import Contact from './Components/Contact/Contact';
import { GetStarted } from './Components/GetStarted/GetStarted';
import Header from './Components/Header/Header';
import Hero from './Components/Herosection/Hero';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';


function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    
    </div>
  );
}

export default App;
