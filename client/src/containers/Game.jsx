import React from 'react';
import Board from '../components/Board'
import Square from '../components/Square'


class Game extends React.Component {
  render(){
    return(
      <div>
        <h4>Tic Tac Toe Game</h4>
        <Board/>
      </div>
    )
  }
}


export default Game;