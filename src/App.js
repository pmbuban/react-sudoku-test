import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameBoard: [
        [0, 8, 0, 4, 0, 9, 0, 5, 0],
        [0, 0, 0, 6, 0, 0, 2, 1, 4],
        [5, 2, 0, 1, 0, 0, 9, 6, 0],
        [1, 6, 0, 7, 3, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [9, 0, 0, 0, 4, 6, 0, 8, 7],
        [0, 7, 5, 0, 0, 7, 0, 2, 6],
        [8, 1, 7, 0, 0, 2, 0, 0, 0],
        [0, 3, 0, 9, 0, 4, 0, 7, 0]
      ]
    }

    this.handleUpdatedBoard = this.handleUpdatedBoard.bind(this)
  }

  handleUpdatedBoard(value, index) {
    console.log('3 - App/handleUpdatedBoard', value, index)

    const updatedBoard = this.state.gameBoard
    updatedBoard[index.row][index.col] = parseInt(value)

    console.log('3 - App/updatedBoard', updatedBoard)
    this.setState({ gameBoard: updatedBoard })
  }

  render() {
    const boardProps = {
      gameBoard: this.state.gameBoard,
      handleUpdatedBoard: (value, index) => this.handleUpdatedBoard(value, index)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sudoku</h1>
        </header>
        <p className="App-intro">
          Sudoku using create-react-app
        </p>

        <div className="game-container">
          <div className="game-board">
            <Board {...boardProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
