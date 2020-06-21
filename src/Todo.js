import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>{this.props.task}</h1>
        <button>delete</button>
      </div>
    )
  }
}

export default Todo