import React from 'react';

const Todo = (props) => <li onClick={props.onClick} id={props.id}>{props.task}</li>;

export default Todo;