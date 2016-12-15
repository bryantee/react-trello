import React, { PropTypes } from 'react'
import List from './list'

class ListContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cards: []
    };
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
  }

  onAddInputChanged(event) {
    let text = event.target.value;
    this.setState({
      text: text
    });
    console.log('onChange callback called');
  }

  onAddSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
    this.setState({
      cards: this.state.cards.concat(this.state.text),
      text: '',
    });
  }

  render () {
    return (
      <List title={this.props.title} cards={this.state.cards} onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} />
    )
  }
}

export default ListContainer;
