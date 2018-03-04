import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameBoard: [
        [8, 0, 0, 4, 0, 6, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 4, 0, 0],
        [0, 1, 0, 0, 0, 0, 6, 5, 0],
        [5, 0, 9, 0, 3, 0, 7, 8, 0],
        [0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 4, 8, 0, 2, 0, 1, 0, 3],
        [0, 5, 2, 0, 0, 0, 0, 9, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 9, 0, 2, 0, 0, 5]
      ]
    }

    this.handleUpdatedBoard = this.handleUpdatedBoard.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleUpdatedBoard(value, index) {
    console.log('3 - App/handleUpdatedBoard', value, index)

    const updatedBoard = this.state.gameBoard
    updatedBoard[index.row][index.col] = parseInt(value, 10)

    console.log('3 - App/updatedBoard', updatedBoard)
    this.setState({ gameBoard: updatedBoard })
  }

  validate() {

  }

  resetGame() {
    this.setState({
      gameBoard: [
        [8, 0, 0, 4, 0, 6, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 4, 0, 0],
        [0, 1, 0, 0, 0, 0, 6, 5, 0],
        [5, 0, 9, 0, 3, 0, 7, 8, 0],
        [0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 4, 8, 0, 2, 0, 1, 0, 3],
        [0, 5, 2, 0, 0, 0, 0, 9, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 9, 0, 2, 0, 0, 5]
      ]
    })
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

          <div className="button" onClick={this.resetGame}>Reset</div>
          <div className="button" onClick={this.validate}>Validate</div>
        </div>
      </div>
    );
  }
}

export default App;
