import React from 'react';//引入的目的是识别react这个语法
import ReactDOM from 'react-dom';//可以让组件挂在到页面的Dom节点上
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// App组件，大写字母一般是组建,要求组件首字母大写，并且采用驼峰命名
import App from './component/App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);//把组件渲染到指定的标签下,此时指定标签是index.html的id为root的DOM

