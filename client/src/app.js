import React  from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game'

window.onload = () => {
  ReactDOM.render(
    <Game/>,
    document.getElementById('app')
  );
}
