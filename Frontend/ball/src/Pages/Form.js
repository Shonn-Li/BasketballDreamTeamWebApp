import React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function Form(props) {
    let img = props.img;
    let points = props.points;

  return (props.trigger) ? (
    <List class="additional" sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary={`Salary`} secondary={points}/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Points" secondary={points}/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Assists" secondary={props.assists}/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Rebounds" secondary={props.rebounds}/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Turnovers" secondary={props.turnovers}/>
      </ListItem>
      <ListItem>
        <ListItemText primary="True Shooting Percentage" secondary={props.ts}/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Three Point Percentage" secondary={props.threept}/>
      </ListItem>
    </List>
  ) : "";
}

export default Form