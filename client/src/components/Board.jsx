import React from 'react';
import Square from '../components/Square'

class Board extends React.Component {
   
  constructor(props){
    super(props)
    this.state={currentPlayer: 'X', cells:['a','b','c','d','e','f','g','h','i']}
  }

  

  render(){
    return(
     <div className='container'>
    <Square className='square' contents={this.state.cells[0]}/>
    <Square className='square' contents={this.state.cells[1]}/>
    <Square className='square' contents={this.state.cells[2]}/>
    <Square className='square' contents={this.state.cells[3]}/>
    <Square className='square' contents={this.state.cells[4]}/>
    <Square className='square' contents={this.state.cells[5]}/>
    <Square className='square' contents={this.state.cells[6]}/>
    <Square className='square' contents={this.state.cells[7]}/>
    <Square className='square' contents={this.state.cells[8]}/>
      </div>
    )
  }
}

export default Board;