import React, { Component } from 'react';
import { Card,Checkbox,Icon } from 'antd';
import '../css/TodoItem.css'
import style from '../css/change.css'

class TodoItem extends Component{
    render(){
        let {changeColor} = style
        return (<div className="TodoItem">
            <Card
            title={<Checkbox 
                checked={this.props.todo.status === 'completed'} 
                onChange={this.toggle.bind(this)}
                >已完成
                </Checkbox>}
            extra={<Icon 
                type="delete" 
                theme="outlined" 
                onClick={this.delete.bind(this)}/>}
            style={{ width: 186 }}
            >
                <p className={this.props.todo.status === 'completed'?'changeColor':''}>{this.props.todo.title}</p> 
            </Card>
        </div>)
    }
    toggle(e){
        this.props.onToggle(e, this.props.todo)

    }
    delete(e){
        this.props.onDelete(e,this.props.todo)
    }
}

export default TodoItem