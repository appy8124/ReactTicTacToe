import React, { Component } from 'react';
import Game from './Component/Game';
import MessageForm from './Component/MessageForm';

import './App.css';


class App extends Component{

  render(){
    return (
      <div className = "App">
        <h1> Play Tic Tac Toe</h1>
        <div><Game/></div>
      </div>
    );
  }
}
export default App;
