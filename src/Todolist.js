import React, { Component } from 'react';
import Todoitem from './Todoitem';
//import logo from './logo.svg';
import './App.css';

//定义react组件
//App继承自comment,comment实际上是react.comment
class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      list: [
        'learning-react'
      ]
    }

    this.changeState = this.changeState.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handelItemDelet = this.handelItemDelet.bind(this);
  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.name],
      name: ''
    })
  }

  handelItemDelet(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }

  changeState(event){
    this.setState({
      name: event.target.value
    })
  }

  getDetailItems(){
    return (
      this.state.list.map((item,index) => {
        return (
          <Todoitem 
          key={index} 
          content={item} 
          index={index} 
          deletes={this.handelItemDelet} />
        )
      })
    )
  }

  render() {
    const inpEara = (
      <div className = 'title'>
        <input type='text' value = {this.state.name} onChange= {this.changeState} />
        <button className='red' onClick = {this.handleBtnClick}>Add</button> {/* JSX中变量需要写在{}中,this指向组件 */}
      </div>
    )

    return ( //return的内容是页面要展示的东西。
      <div>
        {inpEara}
        <ul className='content'>
          {this.getDetailItems()}
        </ul>
      </div>
    );
  }
}

export default Todolist;
