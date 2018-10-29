import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import UserDialog from './components/UserDialog'
import {getCurrentUser, signOut, TodoModel} from './leanCloud'
import './App.css';
import 'normalize.css'
import './reset.css'
import { Button } from 'antd';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: getCurrentUser() || {},
      newTodo: '',
      newContent:'',
      todoList: [],
      visible: false,
      InputShow:false
    }
    let user = getCurrentUser()
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
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
        <div className='logo'>
          <span>Todo <span className='spanStyle'>Lists</span></span>
        </div>
        <h2>{this.state.user.username||'我'}的待办事项</h2>
          {this.state.user.id ? <Button type="primary" className='SignOutBtn' onClick={this.signOut.bind(this)}>登出</Button> : null}  <br/>
          <div className='plus' onClick={this.showInput.bind(this)}>+</div>
        <div className="inputWrapper">
          {this.state.InputShow === false?null:<TodoInput 
          content={this.state.newTodo}
          contents={this.state.newContent}
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)}
          />}
          
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user.id ? 
          null : 
          <UserDialog 
          onSignUp={this.onSignUpOrSignIn.bind(this)} 
          onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
      </div>
    );
  }
  onSignUpOrSignIn(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = user
    this.setState(stateCopy)
  }
  signOut(){
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
  }
  componentDidUpdate(){
  }
  addTodo({title,content}){
    let newTodo = {
      title: title,
      content:content,
      status: '',
      deleted: false
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        newContent:'',
        todoList: this.state.todoList
      })
    }, (error) => {
      console.log(error)
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
    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '' : 'completed'
    TodoModel.update(todo, () => {
      this.setState(this.state)
    }, (error) => {
      todo.status = oldStatus
      this.setState(this.state)
    })
  }
  delete(event, todo){
    TodoModel.destroy(todo.id, () => {
      todo.deleted = true
      this.setState(this.state)
    })
  }
  showInput(e){
    this.setState({
      InputShow:!this.state.InputShow
    })
  }
}

export default App;