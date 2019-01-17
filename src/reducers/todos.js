const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        let newtodos = state.todos.push({
            id:action.id,
            action.text
            
        })
        return newtodos
      case 'TOGGLE_TODO':
        
        
      default:
        return state
    }
  }
  
  export default todos