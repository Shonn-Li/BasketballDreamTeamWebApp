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


// class App extends React.Component {

  // state = {
  //   details: [],
  // }

  // componentDidMount() {

  //   let data;

  //   axios.get('http://localhost:8000/wel/')
  //     .then(res => {
  //       data = res.data;
  //       this.setState({
  //         details: data
  //       });
  //     })
  //     .catch(err => { })
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.details.map((detail, id) => (
  //         <div key={id}>
  //           <div >
  //             <div >
  //               <h1>{detail.detail} </h1>
  //               <footer >--- by
  //                 <cite title="Source Title">
  //                   {detail.name}</cite>
  //               </footer>
  //             </div>
  //           </div>
  //         </div>
  //       )
  //       )}
  //     </div>
  //   );
  // }
// }


export default App;