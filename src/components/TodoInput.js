import React, { Component } from 'react';

class TodoInput extends Component{
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        let title = this.refs.title.value,content= this.refs.content.value;
        // console.log(title,content);
        // this.props.onCommentSubmit({title,content});
        
        this.props.onChange({title,content})
        
      }
    render(){
        return (
        <form>
            <label>
                标题:
                <input type='text' 
                name='title'
                ref="title"
                value={this.props.content} 
                // onKeyPress={this.submit.bind(this)}
                onChange={this.handleInputChange}
                />
            </label>
            <label>
                内容:
                <textarea
                name='content' 
                ref="content"
                value={this.props.contents}
                onChange={this.handleInputChange}
                />
            </label>
            <button onClick={this.submit.bind(this)}>提交</button>
        </form>)
    }
    submit(e){
        e.preventDefault()
        let title = this.refs.title.value,content= this.refs.content.value;
        console.log(title,content);
        this.props.onSubmit({title,content})
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}

export default TodoInput