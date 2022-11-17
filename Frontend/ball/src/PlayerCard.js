import * as React from 'react';
import './PlayerCard.scss';

function PlayerCard() {
  return (
    <div className="wrapper">
      <Card
        img=""
        name=""
        height=""
        team=""
      />

        <Card
        img=""
        name=""
        height=""
        team=""
      />

        <Card
        img=""
        name=""
        height=""
        team=""
      />

        <Card
        img=""
        name=""
        height=""
        team=""
      />

        <Card
        img=""
        name=""
        height=""
        team=""
      />
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