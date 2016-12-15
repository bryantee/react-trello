require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import List from './components/list';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () => {
  const titleArr = ['List Title 1', 'List Title 2'];
  ReactDOM.render(<Board title="This board's title" lists={titleArr} />, document.getElementById('app'));
});;
