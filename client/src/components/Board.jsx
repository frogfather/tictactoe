import React from 'react';
import Square from '../components/Square'

class Board extends React.Component {
   
  constructor(props){
    super(props)
    this.state={currentPlayer: 'X', winner: null, winnerText: '', cells:['','','','','','','','','']}
  }

  clickHandler(options){
    
    if ((options.value ==='')&&(!this.state.winner)){
      var newArray = this.state.cells;
      newArray[options.square] = this.state.currentPlayer;
    this.setState({cells: newArray})
    if (this.state.currentPlayer === 'X'){
      this.setState({currentPlayer: "O"})
    }else{
      this.setState({currentPlayer: "X"})
    }
    var winner = this.checkWinner();
    if (winner){
      var winnerMsg = winner+' has won!'
      this.setState({winner: winner})
      this.setState({winnerText: winnerMsg})
      console.log('winner is '+winner)
      }
    }
  }

  checkWinner(){
    var cells = this.state.cells;
    if ((cells[0]===cells[1])&&(cells[1]===cells[2])){return cells[0]}
    if ((cells[3]===cells[4])&&(cells[4]===cells[5])){return cells[3]}
    if ((cells[6]===cells[7])&&(cells[7]===cells[8])){return cells[6]}
    if ((cells[0]===cells[3])&&(cells[3]===cells[6])){return cells[0]}
    if ((cells[1]===cells[4])&&(cells[4]===cells[7])){return cells[1]}
    if ((cells[2]===cells[5])&&(cells[5]===cells[8])){return cells[2]}
    if ((cells[0]===cells[4])&&(cells[4]===cells[8])){return cells[0]}
    if ((cells[2]===cells[4])&&(cells[4]===cells[6])){return cells[2]}
    return null;
  }

  resetGame(){
    this.setState({currentPlayer: 'X', cells:['','','','','','','','',''], winner: null, winnerText: ''})
  }

  render(){
    return(
     <div className='page'> 
     <div className='container'>
    <Square className='square' number={0} contents={this.state.cells[0]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={1} contents={this.state.cells[1]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={2} contents={this.state.cells[2]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={3} contents={this.state.cells[3]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={4} contents={this.state.cells[4]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={5} contents={this.state.cells[5]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={6} contents={this.state.cells[6]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={7} contents={this.state.cells[7]} click={this.clickHandler.bind(this)}/>
    <Square className='square' number={8} contents={this.state.cells[8]} click={this.clickHandler.bind(this)}/>
      </div>
    <button onClick={this.resetGame.bind(this)}>Reset Game</button>
    <div className='winnerDiv'>{this.state.winnerText}</div>
    </div>
    )
  }
}

export default Board;