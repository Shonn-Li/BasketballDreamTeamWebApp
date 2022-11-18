import * as React from 'react';
import './PlayerCard.scss';
import axios from 'axios';

function PlayerCard(props) {

  const [state, setState] = React.useState(null);
  const [renderstate, set] = React.useState(false);

  const order = props.order;
  const searchQuery = props.searchQuery;
  const filter = props.filter;

  React.useEffect(() => {
    console.log("testing");
    fn();
    if (filter === '') {
      getPlayers();
    } else {
      getPlayersHeightOrder();
    }
  }, [renderstate])

  function fn() {
    setTimeout(() => {
      set(prev => prev + 1)
    }, 3000)
  }

  function getPlayers() {
    axios({
      method:"GET",
      url: `http://127.0.0.1:8000/api/search?search=${searchQuery}`
    }).then((res) => {
      const data = res.data;
      console.log(data);
      setState(data);
      console.log(state);
    }).catch((error) => {
      if(error.message) {
        console.log(error.response);
      }
    })
  }

  function getPlayersHeightOrder() {
    axios({
      method:"GET",
      url: `http://127.0.0.1:8000/api/height`
    }).then((res) => {
      const data = res.data;
      console.log(data);
      setState(data);
      console.log(state);
    }).catch((error) => {
      if(error.message) {
        console.log(error.response);
      }
    })
  }

  if (!state) return null;
  
  if (order === 'desc') {
    return (
      <div className='wrapper'>
          {state.map((player) => {
            return <Card
            img=""
            name={player.Name}
            height={player.Height_cm}
            team={player.Tm}
             />
          })}
      </div>
    );
  } else {
    return (
      <div className='wrapper'>
          {state.reverse().map((player) => {
            return <Card
            img=""
            name={player.Name}
            height={player.Height_cm}
            team={player.Tm}
             />
          })}
      </div>
    );
  }
}

function Card(props) {
    return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__name">{props.name}</h2>
          <p className="card__height">{props.height}</p>
          <p className="card__team">{props.team}</p>
      </div>
      <button className="card__btn">View Stats</button>
    </div>
  );
}

export default PlayerCard;
