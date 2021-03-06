import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Board from '../components/Board';

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
      ],
      errorRows: [],
      errorCols: []
    }

    this.handleUpdatedBoard = this.handleUpdatedBoard.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.validate = this.validate.bind(this)
    this.findDuplicates = this.findDuplicates.bind(this)
  }

  handleUpdatedBoard(value, index) {
    const updatedBoard = this.state.gameBoard
    updatedBoard[index.row][index.col] = parseInt(value, 10)

    this.setState({ gameBoard: updatedBoard })
  }

  transpose(array) {
    // reverse columns to rows in 2-dimensional array
    // makes checking for duplicates easier
    // [[a, a],    TO    [[a, b],
    //  [b, b]]           [a, b]]
    return Object.keys(array[0]).map(col => array.map(row => row[col]))
  }

  findDuplicates(data) {
    // find duplicates of
    const duplicates = [];
    for (var i = 0; i < data.length; i++) {
      for (var j = i + 1; j < data.length; j++) {
        if (data[i] === data[j] && duplicates.indexOf(data[j]) === -1) {
          duplicates.push(data[j]);
        }
      }
    }

    // 0 should not be included in duplicates
    const index = duplicates.findIndex(i => i === 0)
    duplicates.splice(index, 1)
    return duplicates
  }

  validate() {
    // all checks are valid until duplicates found
    let allRowsValid = true
    let allColumnsValid = true
    // let allSquaresValid = true
    let errorRowsIndex = []
    let errorColsIndex = []
    // let errorSquareIndex = []

    // check rows for duplicates
    this.state.gameBoard.forEach((row, i) => {
      // check rows
      const duplicates = this.findDuplicates(row)
      if(duplicates.length > 0) {
        allRowsValid = false
        errorRowsIndex.push(i)
      }
    })

    // transpose two dimensional array
    const transposedArray = this.transpose(this.state.gameBoard)

    // check columns via transposed array
    transposedArray.forEach((row, i) => {
      // check rows
      const duplicates = this.findDuplicates(row)
      if(duplicates.length > 0) {
        allColumnsValid = false
        errorColsIndex.push(i)
      }
    })


    // NOTE: The following could not be completed in time
    // - validate 3x3 squares
    // - make use of allRowsValid & allColumnsValid in order to produce success message
    // - could not randomly generate a game board

    console.log('allRowsValid', allRowsValid)
    console.log('allColumnsValid', allColumnsValid)

    this.setState({
      errorRows: errorRowsIndex,
      errorCols: errorColsIndex
    })
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
      ],
      errorRows: [],
      errorCols: []
    })
  }

  render() {
    const boardProps = {
      gameBoard: this.state.gameBoard,
      originalBoard: [
        [8, 0, 0, 4, 0, 6, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 4, 0, 0],
        [0, 1, 0, 0, 0, 0, 6, 5, 0],
        [5, 0, 9, 0, 3, 0, 7, 8, 0],
        [0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 4, 8, 0, 2, 0, 1, 0, 3],
        [0, 5, 2, 0, 0, 0, 0, 9, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 9, 0, 2, 0, 0, 5]
      ],
      handleUpdatedBoard: (value, index) => this.handleUpdatedBoard(value, index),
      errorRows: this.state.errorRows,
      errorCols: this.state.errorCols
    }

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo" />

          <h1 className="App-title">
            Sudoku
          </h1>
        </header>

        <p className="App-intro">
          Sudoku game using create-react-app
        </p>
        
        <div className="game-container">

          <div className="game-board">
            <Board {...boardProps} />
          </div>

          <div
            className="button"
            onClick={this.resetGame}>
            Reset
          </div>

          <div
            className="button"
            onClick={this.validate}>
            Validate
          </div>

        </div>

      </div>
    );
  }
}

export default App;
