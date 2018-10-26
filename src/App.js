import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import UserDialog from './components/UserDialog'
import './App.css';
import 'normalize.css'
import './reset.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{},
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
        <h3>{this.state.user.username||'我'}的待办</h3>
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
        {this.state.user.id ? null : <UserDialog onSignUp={this.onSignUp.bind(this)}/>}
      </div>
    );
  }
  onSignUp(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = user
    this.setState(stateCopy)
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
