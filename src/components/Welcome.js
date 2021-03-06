import React, { Component } from 'react';

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            date: new Date(),
            test:1
        }
        setInterval(()=>{this.setState({
            date: new Date()
        })},1000)
        console.log('我已经在 constructor 里将 props 和 state 初始化好了')
    }
    componentWillMount(){
        this.setState({
            test:'componentWillMount'
        })
        console.log('开始运行 render')
    }
    render(){
        console.log('正在运行 render')
        return ( 
            <div>
            <h1>Hello, {this.props.name}</h1>
            <h2>{this.state.date.toString()}</h2>
            <h3>{this.state.test}</h3>
            </div>)
    }
    componentDidMount(){
        this.setState({
            test:'componentDidMount'
        })
        console.log('render 运行完毕')
    }
    shouldComponentUpdate(){
        return true
      }
    componentWillUpdate(){
        console.log('开始更新组件')
    }
    componentDidUpdate(){
        console.log('更新完毕')
    }
}
export default Welcome