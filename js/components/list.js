import React, { PropTypes } from 'react';
import Card from './card';

class List extends React.Component {
  render () {
    return (
      <div className="card-list">
        <h1>{this.props.title}</h1>
        <Card content="Card content 1"/>
        <Card content="Card content 2"/>
        <Card content="Card content 3"/>
      </div>
    )
  }
}

export default List;
