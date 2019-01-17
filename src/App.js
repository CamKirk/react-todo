import React, { Component } from 'react';
import Todo from './Todo.js';


class App extends Component {
  state = {
    todos: [],
    taskInput: "",
    viewMode: "active"
  };

  handleInput = (e) => {
    this.setState({
      taskInput: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = this.state.todos;
    if (!this.state.taskInput) return
    newTodos.push({
      task: this.state.taskInput,
      completion: false,
      id: newTodos.length
    });

    this.setState({
      taskInput: "",
      todos: newTodos
    });
  };

  handleCompletion = (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    let todolist = this.state.todos

    todolist[id].completion = todolist[id].completion ? false:true;

    this.setState({
      todolist
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
        <form>
          <input value={this.state.taskInput} onChange={this.handleInput} />

          <button type="submit" onClick={this.handleSubmit}>Add task</button>
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
