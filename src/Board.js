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
    console.log('2 - Board/onChange', value, index)
    this.props.handleUpdatedBoard(value, index)
  }

  generateBoard() {
    console.log('Board/generateBoard')
    const board = this.state.gameBoard

    return board.map((row, i) => {
      return (
        <div className="board-row">
          {
            row.map((col, j) => {
              const blockProps = {
                key: `row-${i}-col-${j}`,
                index: {
                  row: i,
                  col: j
                },
                value: col,
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
    console.log('board/render', this.props)
    return (
      <div className="board-container">
        { this.generateBoard() }
      </div>
    )
  }
}

export default Board
