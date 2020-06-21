import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [
        {task: "call mj"},
        {task: "gg"}
      ]
    };
    this.renderItems = this.renderItems.bind(this);
    this.addTodo = this.addTodo.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }

  // removeTodo(id) {

  // }

  renderItems() {
    return (
      <div>
        {this.state.todos.map((todo) => (
          <Todo 
            // key={task.id}
            // id={task.id}
            task={todo.task} 
            // removeBox={() => this.removeBox(box.id)}
          />
        ))}
      </div>
    );
  }

  render () {
    return (
     <div>
       {this.renderItems()}
       <NewTodoForm addTodo={this.addTodo}/>
     </div> 
    );
  }
}

export default TodoList;