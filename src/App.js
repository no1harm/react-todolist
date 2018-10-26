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
      newContent:'',
      todoList: []
    }
  }
  render() {
    let todos = this.state.todoList
    .filter((item) => !item.deleted)
    .map((item,index)=>{
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
          contents={this.state.newContent}
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)}
          />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    );
  }
  componentDidUpdate(){
  }
  addTodo({title,content}){
    this.state.todoList.push({
      id: idMaker(),
      title: title,
      content:content,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      newContent:'',
      todoList: this.state.todoList
    })
  }
  changeTitle({title,content}){
    this.setState({
      newTodo: title,
      newContent:content, 
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
