import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import './App.css';
import 'normalize.css'
import './reset.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todoList: [

      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} 
          onToggle={this.toggle.bind(this)}
          onDelete={this.delete.bind(this)}
            />
        </li>
      )
    })
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="inputWrapper">
          <TodoInput 
          content={this.state.newTodo} 
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)}
          />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state) 
  }
  delete(event, todo){
    todo.deleted = true
    this.setState(this.state) 
  }
}

export default App;

let id = 0
 function idMaker(){
  id += 1
  return id
}
