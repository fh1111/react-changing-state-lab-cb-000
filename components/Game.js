import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

const INITIAL_STATE = {
  board: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  turn: 'X'
}

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
  }

  handleClick (i, ev) {
  }

  getWinner () {
  }

  isComplete () {
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
