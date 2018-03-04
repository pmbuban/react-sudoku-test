import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.value
    })
  }

  handleChange(e) {
    let value = e.currentTarget.value
    if(value.length > 1) value = value[0]
    console.log('1 - Box/onChange', value, this.props.index)
    this.props.onChange(value, this.props.index)
  }

  render() {
    if(this.props.index.row === 0 && this.props.index.col === 0) {
      console.log('box/render', this.props)
    }
    // console.log('Box/render', this.props.index.row,
    // this.props.index.col, this.state.value)

    const inputProps = {

    }

    return (
      <div
        key={this.props.key}
        className="box-container">
        <input
          className="box-input"
          type="number"
          min={1}
          max={9}
          maxLength="1"
          value={this.props.value || ''}
          onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}

export default Box
