import * as React from 'react';
import './PlayerCard.scss';
import axios from 'axios';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Form from './Form'

const divStyle = {
  justifyContent: "start",
};

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
      method: "GET",
      url: `http://127.0.0.1:8000/api/players/search?search=${searchQuery}`
    }).then((res) => {
      const data = res.data;
      console.log(data);
      setState(data);
      console.log(state);
    }).catch((error) => {
      if (error.message) {
        console.log(error.response);
      }
    })
  }

  function getPlayersHeightOrder() {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/players/height`
    }).then((res) => {
      const data = res.data;
      console.log(data);
      setState(data);
      console.log(state);
    }).catch((error) => {
      if (error.message) {
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
            style={divStyle}
            name={player.Name}
            height={player.Height_cm}
            weight={player.Weight}
            team={player.Tm}
            position={player.Position}
            age={player.Age}
            salary={player.Salary}

            points={player.PTS}
            assists={player.AST}
            rebounds={player.TRB}
            turnovers={player.TOV}
            ts={player.TS_perc}
            threept={player.three_P_perc}
          />
        })}
      </div>
    );
  } else {
    return (
      <div className='wrapper'>
        {state.reverse().map((player) => {
          return <Card
            style={divStyle}
            img=""
            name={player.Name}
            height={player.Height_cm}
            weight={player.Weight}
            team={player.Tm}
            position={player.Position}
            age={player.Age}
            salary={player.Salary}

            points={player.PTS}
            assists={player.AST}
            rebounds={player.TRB}
            turnovers={player.TOV}
            ts={player.TS_perc}
            threept={player.three_P_perc}
          />
        })}
      </div>
    );
  }
}

function Card(props) {
  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [favIconColor, setFavIconColor] = React.useState("grey");
  const onFavIconClick = () => {
    //do other stuff
    if (favIconColor == "grey") {
      setFavIconColor("red");
    }
    else {
      setFavIconColor("grey");
    }
  };

  function change() {

  }
  return (
    <div className="card" style={divStyle}>
      <div className="card__body">
        {/* <IconButton className="card__icon"
          style={{
            position: "absolute",
            top: "3%",
            left: "85%",
            color: favIconColor,
          }}
          onClick={onFavIconClick}
        >
          <FavoriteIcon />
        </IconButton> */}
        <img src={props.img} class="card__image" />
        <h2 className="card__name">{props.name}</h2>
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemText> Height: {props.height}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText> Team: {props.team}</ListItemText>
          </ListItem>
        </List>
      </div>
      <button className="card__btn" onClick={() => {
        setButtonPopup(!buttonPopup);
        var elem = document.getElementsByClassName("card__btn");
        if (document.getElementById("card__btn") == null) {
          console.log("some shit");
        }
        if (elem.value == "View Stats") elem.value = "Close";
        else elem.value = "Close";
      }} >View Stats

      </button>
      <Form trigger={buttonPopup}
        setTrigger={setButtonPopup}
        img=""
        name={props.name}
        height={props.height}
        weight={props.weight}
        team={props.team}
        position={props.position}
        age={props.age}
        salary={props.salary}
        points={props.points}
        assists={props.assists}
        rebounds={props.rebounds}
        turnovers={props.turnovers}
        ts={props.ts}
        threept={props.threept}
      >

      </Form>
    </div>
  );


}

export default PlayerCard;