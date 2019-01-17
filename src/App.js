import React, { Component } from 'react';
import Todo from './Todo.js';


class App extends Component {
  state = {
    todos:[]
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <Todo task="theoretical" />
      </div>
    );
  }
}

export default App;
