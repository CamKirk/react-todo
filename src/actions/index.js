export const handleCompletion = (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    let todolist = this.state.todos

    todolist[id].completion = todolist[id].completion ? false:true;

    this.setState({
      todolist
    });

  };

  let nextTodoId = 0
  export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  })
  
  export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  
  export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })
  
  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }
  