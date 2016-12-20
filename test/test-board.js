import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai from 'chai'

const should = chai.should();

import Board from '../js/components/board'

describe('Board component', function() {
  it('Renders a Board component', function() {
    const title = 'Here is a board title';
    const lists = ['Here is a list title', 'And another title'];

    const renderer = TestUtils.createRenderer();
    renderer.render(<Board title={title} lists={lists} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('board');
    result.props.children[0].type.should.equal('h1');
    result.props.children[0].props.children.should.equal(title);
    result.props.children[1][0].props.title.should.equal(lists[0]);
    result.props.children[1][1].props.title.should.equal(lists[1]);
  });
});
