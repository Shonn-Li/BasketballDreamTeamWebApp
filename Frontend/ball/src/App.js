import logo from './logo.svg';
import './App.css';
import PlayerCard from './PlayerCard';
import Main from './Main';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/PlayerCard" element={<PlayerCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
