import React, { Component } from 'react';
import logo from './logo.svg';
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1, title:'第一个待办'},
        {id:2, title:'第二个待办'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return <TodoItem todo={item}/>
    })
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
