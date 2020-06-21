import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // const newBox = {...this.state, id: uuid()}
    this.props.addTodo(this.state);
    this.setState(state => ({
      task: "",
    }));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="task">Task: </label>
          <input
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </div>
        <button>Add new task</button>
      </form>

    )
  }
}


export default NewTodoForm;