import React, { Component } from 'react';
/**
 *
 *
 * @class NodeCard
 * @extends {Component}
 */
class NodeCard extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }

  }

  render() {
    const { name, number, isHuman, tags } = this.props;
    return ( //return的内容是页面要展示的东西。
        <div className ='alert alert-success'>
          <h4 className = 'alert-heading'>{name}</h4>
          <ul>
            <li>电话：{number}</li>
            <li>属性：{ isHuman ? '人类' : '外星人' } </li>
            <li>标签：
            { tags.map( (item, index) => ( //JSX语法  也可以写成es6写法  箭头函数省略{}
                <span className='badge badge-pill badge-primary' key= {index} >{item}</span>
            ) ) } 
            </li>

            <li> 标签：
            { 
              tags.map( (item, index) => {  //箭头函数标准语法
              return (<span className='badge badge-pill badge-primary' key= {index} >{item + '...'}</span>)  //JSX语法   只有一个根元素
              } ) 
            } 
            </li>
          </ul>
        </div>
    );
  }
}

export default NodeCard;
