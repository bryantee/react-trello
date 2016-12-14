import React, { PropTypes } from 'react';
import Card from './card';

class List extends React.Component {
  render () {
    return (
      <div className="card-list">
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default List;
