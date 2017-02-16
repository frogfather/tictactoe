import React from 'react';

class Square extends React.Component {

  clickSquare(event) {
    event.persist()
    this.props.click({square: this.props.number, value: event.target.innerText})
  }

  render(){
    return(
        <div className='square' onClick={this.clickSquare.bind(this)}>{this.props.contents}</div>
    )
  }
}

export default Square;