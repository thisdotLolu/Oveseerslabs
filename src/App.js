// import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Showcase from './components/Showcase';
import Team from './components/Team';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Showcase/>
      <Roadmap/>
      <Team/>
    </div>
  );
}

export default App;
