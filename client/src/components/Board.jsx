import React from 'react';
import Square from '../components/Square'

class Board extends React.Component {
  render(){
    return(
      <div>
        <h4>Yawn I'm board</h4>
        <Square/>
      </div>
    )
  }
}

export default Board;