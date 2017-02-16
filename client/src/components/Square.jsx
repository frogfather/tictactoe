import React from 'react';

class Square extends React.Component {

  clickSquare(event) {
    event.persist()
    console.log(event)
  }

  render(){
    return(
        <div className='square'>{this.props.contents}</div>
    )
  }
}

export default Square;