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
    if (!this.state.taskInput) return
    newTodos.push({
      task:this.state.taskInput,
      completion: false,
      id : newTodos.length
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

    todolist[id].completion = true;

    this.setState({
      todolist
    });
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Todo List React</header>

        <form>
          <input value={this.state.taskInput} onChange={this.handleInput} />

          <button type="submit" onClick={this.handleSubmit}>Add task</button>
        </form>
        
        <ul>
          {this.state.todos.map((taskObj) => 
          
          taskObj.completion
            ?null
            :<Todo task={taskObj.task} key={taskObj.id} onClick={this.handleCompletion} id={taskObj.id}/>
          
          )}
        </ul>
 
      </div>
    );
  }
}

export default App;
