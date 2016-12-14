import React, { PropTypes } from 'react'
import List from './list';
// import Card from './card';

class Board extends React.Component {
  render () {
    return (
      <div className="board">
        <List />
        <List />
        <List />
      </div>
    )

  }
}

export default Board;
