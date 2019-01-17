import React, { Component } from 'react';
import Todo from './Todo.js';


class App extends Component {
  state = {
    todos:[],
    taskInput:""
  };

  handleInput = (e) =>{
    this.setState({
      taskInput: e.target.value
    })
  }

  handleSubmit = (e) =>{

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <input onChange={this.handleInput} />
        <Todo task="theoretical" />
      </div>
    );
  }
}

export default App;
