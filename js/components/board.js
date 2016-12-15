import React, { PropTypes } from 'react'
import List from './list';
import ListContainer from './list-container'

class Board extends React.Component {
  render () {
    const cardsArr = ['Content card 1', 'Content card 2', 'Content Card 3'];
    const listComponents = this.props.lists.map((title, index) => {
      return <ListContainer title={title} key={index} cards={cardsArr} />;
    });
    return (
      <div className="board">
        <h1>{this.props.title}</h1>
        {listComponents}
      </div>
    )

  }
}

export default Board;
