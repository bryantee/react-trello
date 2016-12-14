import React, { PropTypes } from 'react'
import List from './list';
// import Card from './card';

class Board extends React.Component {
  render () {
    return (
      <div className="board">
        <h1>{this.props.title}</h1>
        <List title="ToDo"/>
        <List title="Current"/>
        <List title="Done"/>
      </div>
    )

  }
}

export default Board;
