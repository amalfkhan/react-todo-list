import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: []
    };
    
    // this.renderItems = this.renderItems.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  // renderItems() {
  //   return (
  //     <div>
  //         {this.state.todos.map((todo) => (
  //           <Todo 
  //             key={todo.id}
  //             id={todo.id}
  //             task={todo.task}
  //             completed={todo.completed}
  //             removeTodo={this.removeTodo}
  //             toggleTodo={this.toggleCompletion}
  //             editTodo={this.editTodo}
  //           />
  //         ))}
  //     </div>
  //   );
  // }

  addTodo(todo) {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== id)
    });
  }

  toggleCompletion(id) {
      const updatedTodos = this.state.todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
      this.setState({todos: updatedTodos});
  }

  editTodo(id, editedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, task: editedTask}
      }
      return todo;
    })
    this.setState({todos: updatedTodos});
  }

  render () {
    const todos = this.state.todos.map(todo => {
      return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={this.removeTodo}
            editTodo={this.editTodo}
            toggleTodo={this.toggleCompletion}
          />
      );
    });

    return (
     <div className="TodoList">
        <h1>
         List<span>Basic to-do list built in React</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo}/>
     </div> 
    );
  }
}

export default TodoList;