import React from 'react';
// import '../App.css';
import { Button } from '../features/Button.js';
import { useNavigate } from "react-router-dom";
import '../css/Intro.css';

function Intro() {
  return (
    <div className='intro-container'>
      <h1>YOUR DREAM TEAM AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='intro-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Intro;
