import React from 'react';
import Square from './Square';
import Messageform from './MessageForm';




class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        winnerMessage : null,
        loserMessage : null,
        winner: '',
        loser: '',
      };
    }
    renderSquare(i) {
      return (
               <Square 
               value ={this.state.squares[i]}
               onClick = {() => this.handleClick(i)}
               />
              );
    }
    
     handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    winnerMessage = ((props) =>{

      return "Congratulations ! You are the winner!";
    });

    loserMessage = ((props) =>{
      return "Sorry .. You lost!";
    });
    calculateWinner = ((squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])     {
            return squares[a];
          }
        }
        return null;
      });
  
    render() {
      const winner = this.calculateWinner(this.state.squares);
      let loser = '';
      let status;
      if(winner){
        status = 'Winner :' + winner;
        if(winner === 'X'){
          loser = 'O';
        }else{
          loser = 'X';
        }
        // this.setState({winner: winner,winnerMessage: this.winnerMessage,loserMessage:this.loserMessage,loser:loser});
      }else{
        status = 'Next Player: '+ (this.state.xIsNext ? 'X': 'O');
      }
  
      return (
       
        <div>
          <Messageform winner = {winner} loser = {loser}/>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        
      );
    }
     



  }

 

  export default Board;
  