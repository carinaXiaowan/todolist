import React from 'react';//引入的目的是识别react这个语法
import ReactDOM from 'react-dom';//可以让组件挂在到页面的Dom节点上
import './index.css';
// App组件，大写字母一般是组建
import NodeCard from './NodeCard';

ReactDOM.render(<NodeCard />, document.getElementById('root'));//把组件渲染到指定的标签下

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
