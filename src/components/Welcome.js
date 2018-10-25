import React, { Component } from 'react';

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
        setInterval(()=>{this.setState({
            date: new Date()
        })},1000)
    }
    render(){
        return <div><h1>Hello, {this.props.name}</h1><h2>{this.state.date.toString()}</h2></div> ;
    }
}
export default Welcome