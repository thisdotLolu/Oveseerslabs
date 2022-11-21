// import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Showcase from './components/Showcase';
import Team from './components/Team';
import { Route,Routes } from 'react-router-dom';
import Faq from './components/Faq';
import Home from './pages/Home';
import Utilities from './pages/Utilities';
import Staking from './pages/Staking';
import SneakPeak from './pages/SneakPeak';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/utilities' element={<Utilities/>}/>
      <Route path='/staking' element={<Staking/>}/>
      <Route path='/gallery' element={<SneakPeak/>}/>
      </Routes>
    </div>
  );
}

export default App;
