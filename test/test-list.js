import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai from 'chai'

const should = chai.should();

import List from '../js/components/list'

describe('List component', function() {
  it('Renders a List component', function() {
    const cards = [
      'Test Card 1',
      'Test Card 2'
    ];
    const title = 'Title';

    const renderer = TestUtils.createRenderer();
    renderer.render(<List title={title} cards={cards} />);
    const result = renderer.getRenderOutput();

    result.props.className.should.equal('card-list');
    const children = result.props.children;
    children[0].type.should.equal('h1');
    children[1][0].props.text.should.equal(cards[0]);
    children[1][1].props.text.should.equal(cards[1]);
    children[2].type.should.equal('form');
  });
});
