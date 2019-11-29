import React , { Component } from 'react';
/** 此组件是form表单的应用 */

class CommentBox extends Component {
    constructor(props){ //构造函数
        //constructor方法默认返回实例对象（即this）
        //实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
        super(props)
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        //将当前this（实例）绑定到handleChange中
        // bind通常用来重新绑定函数体中的this并返回一个具有指定this的函数。
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){ //原型对象
        console.info(e.type)
        this.setState({
            value: e.target.value
        })
        //this会被指向当前类CommentBox的实例this
    }

    handleSubmit(e){
        alert(this.state.value);
        e.preventDefault();
    }

    render(){
        return (
            <form className='p-5' onSubmit = {this.handleSubmit} >  
                {/* 受控组件 */}
                <div className='form-group'>
                    <label>留言内容</label>
                    <input 
                        type='text' 
                        placeholder='请输入'
                        className='form-control'
                        value={this.state.value} 
                        onChange={this.handleChange}
                        />
                    <button 
                    type='submit'
                    className='btn btn-primary'>留言</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;