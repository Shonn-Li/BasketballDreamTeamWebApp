import './App.css';
import PlayerCard from './PlayerCard';
import Main from './Main';
import {Routes, Route} from "react-router-dom"
import Intro from './Intro';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/Main" element={<Main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/PlayerCard" element={<PlayerCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
