import { Box, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import { mergeClasses } from '@material-ui/styles';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Intro.css";

const useStyles = makeStyles({
 root: {
  backgrond: "linear-gradient(45deg, #FE6B8B #FF8E53)",
  border: 0,
  marginBottom: 1,
  borderRadius: 15,
  color: "white",
  padding: "15px 30px",
 },
});

function Intro() {
 let history = useNavigate();
 return (
  <header className="main-container">
   <Button
    variant="contained"
    onClick={() => {
     history("/Login");
    }}
   >
    Build Your Team Now!
   </Button>
  </header>
 );
}

export default Intro;
