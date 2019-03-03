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
    this.state = INITIAL_STATE;

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState(INITIAL_STATE);
  }

  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board.slice();
    board.splice(i, 1, this.state.turn);
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({ board, turn });    
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
