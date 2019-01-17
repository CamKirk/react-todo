import React, { Component } from 'react';
import Todo from './Todo.js';


class App extends Component {
  state = {
    todos: [],
    taskInput: ""
  };

  handleInput = (e) => {
    this.setState({
      taskInput: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = this.state.todos;

    newTodos.push({
      task:this.state.taskInput,
      completion: false
    });

    this.setState({
      taskInput: "",
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Todo List React</header>

        <form>
          <input value={this.state.taskInput} onChange={this.handleInput} />

          <button type="submit" onClick={this.handleSubmit}>Add task</button>
        </form>
        
        <ul>
          {this.state.todos.map((task) => !task.completion
            ?<Todo task={task.task} />
            :null
          )}
        </ul>

      </div>
    );
  }
}

export default App;
