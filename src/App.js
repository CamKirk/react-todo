import React, { Component } from 'react';
import Todo from './Todo.js';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import { dispatch } from 'rxjs/internal/observable/range';


class App extends Component {
  state = {
    todos: [],
    taskInput: "",
    viewMode: "active"
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input.value))
    input.value = ''
  }

  handleInput = (e) => {
    this.setState({
      taskInput: e.target.value
    });
  };


  todoFilter = (mode, todoList = this.state.todos) => {
    return (
      (mode === "active")
        ? todoList.filter((task) => !task.completion)
        : todoList.filter((task) => task.completion)
    );
  };

  toggleMode = () =>{
    let mode = (this.state.viewMode === "active") ? "completed" : "active";
    this.setState({viewMode:mode});
  };

  render() {
    return (

      <div className="App">
        <h1 className="App-header">Todo List React</h1>
        <h4>Active Todo's: {this.todoFilter("active").length}</h4>
        <button onClick={this.toggleMode}>Toggle Mode</button>
        <h4>Mode: {this.state.viewMode}</h4>

        
        <form onSubmit={this.handleFormSubmit}>

          <input value={this.state.taskInput} onChange={this.handleInput} />

          <button type="submit">Add task</button>
        </form>

        <ul>
          {this.todoFilter(this.state.viewMode).map((taskObj) =>
              <Todo task={taskObj.task} key={taskObj.id} onClick={this.handleCompletion} id={taskObj.id} />)}
        </ul>

      </div>
    );
  }
}

export default App;
