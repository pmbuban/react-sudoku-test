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
    // process and manage input data
    let value = e.currentTarget.value

    // manage max length since this is a "controlled input"
    if(value.length > 1) value = value[0]

    // input can not be 0
    if(value === '0' || value.toLowerCase() === 'e') value = ''

    // send data back up to parent > Block.js
    this.props.onChange(value, this.props.index)
  }

  render() {
    return (
      <div
        key={this.props.key}
        className="box-container">
        <input
          className={`box-input ${this.props.className}`}
          type="number"
          value={this.props.value || ''}
          disabled={this.props.disabled}
          onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}

export default Box
