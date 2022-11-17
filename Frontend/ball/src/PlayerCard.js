import * as React from 'react';
import './PlayerCard.scss';
import axios from 'axios';

function PlayerCard() {
  // return (
  //   <div className="wrapper">
  //     <Card
  //       img=""
  //       name=""
  //       height=""
  //       team=""
  //     />

  //       <Card
  //       img=""
  //       name=""
  //       height=""
  //       team=""
  //     />

  //       <Card
  //       img=""
  //       name=""
  //       height=""
  //       team=""
  //     />

  //       <Card
  //       img=""
  //       name=""
  //       height=""
  //       team=""
  //     />

  //       <Card
  //       img=""
  //       name=""
  //       height=""
  //       team=""
  //     />
  //   </div>
  // );

  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    console.log("testing");
    getPlayers();
  })

  function getPlayers() {
    axios({
      method:"GET",
      url: "http://localhost:8000/api/"
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

  if(!state) return null;

  return (
    <div className='wrapper'>
      {/* {state.map((player) => {
        // <Card
        //     img=""
        //     name={player.Name}
        //     height={player.Height_cm}
        //     team={player.Tm}
        // />
        <p>
          {player.Name}
        </p>
      })} */}
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