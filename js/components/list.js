import React, { PropTypes } from 'react';
import Card from './card';

class List extends React.Component {

  render () {

    const cardComponents = this.props.cards.map((contents, index) => {
      return <Card key={index} text={contents}/>;
    });
    return (
      <div className="card-list">
        <h1>{this.props.title}</h1>
        {cardComponents}
        <form onSubmit={this.props.onAddSubmit}>
          <input type="text" onChange={this.props.onAddInputChanged} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default List;
