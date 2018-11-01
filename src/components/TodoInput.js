import React, { Component } from 'react';
import { Button } from 'antd';
import '../css/TodoInput.css'
import "animate.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class TodoInput extends Component{
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        let title = this.refs.title.value
        // console.log(title,content);
        // this.props.onCommentSubmit({title,content});
        let content = ''
        this.props.onChange({title,content})
        
      }
    render(){
        return (
            <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
            >
            <form className='InputForm animated bounceInDown' key="amache" >
                <label>
                    <input
                    className='Inputstyle'
                    name='title'
                    ref="title"
                    placeholder="  添加 Todo"
                    style={{ maxWidth: 200 }}
                    value={this.props.content} 
                    onKeyPress={this.submit.bind(this)}
                    onChange={this.handleInputChange}
                    />
                </label>
                <Button onClick={this.submit2.bind(this)}>添加</Button>
            </form>
        </ReactCSSTransitionGroup>)
    }
    submit(e){
        if(e.key === 'Enter'){
            e.preventDefault()
            let title = this.refs.title.value
            let content = ''
            this.props.onSubmit({title,content})
        }
    }
    submit2(e){
        e.preventDefault()
        let title = this.refs.title.value
        let content = ''
        this.props.onSubmit({title,content})
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}

export default TodoInput