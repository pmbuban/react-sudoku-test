import React, { Component } from 'react';
import Box from './Box'

class Board extends Component {
  constructor(props) {
    super(props)
    console.log('board/props', props)
    this.state = {
      gameBoard: props.gameBoard
    }

    this.generateBoard = this.generateBoard.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(props) {
    console.log('board/recieved', props)
    this.setState({ gameBoard: props.gameBoard })
  }

  onChange(value, index) {
    // send data back up to parent > App.js
    this.props.handleUpdatedBoard(value, index)
  }

  generateBoard() {
    // create sudoku board based on 2-dimensional array
    const board = this.state.gameBoard

    // process rows
    return board.map((row, i) => {
      const rowError = this.props.errorRows.includes(i) ? 'error-row' : ''

      return (
        <div className="board-row">
          {
            // add input boxes
            row.map((col, j) => {
              const colError = this.props.errorCols.includes(j) ? 'error-col' : ''

              const blockProps = {
                key: `row-${i}-col-${j}`,
                index: {
                  row: i,
                  col: j
                },
                disabled: (this.props.originalBoard[i][j] > 0),
                value: col,
                className: `${rowError} ${colError}`,
                onChange: (value, index) => this.onChange(value, index)
              }

              return <Box {...blockProps} />
            })
          }
        </div>
      )
    })
  }

  render() {
    return (
      <div className="board-container">
        { this.generateBoard() }
      </div>
    )
  }
}

export default Board
