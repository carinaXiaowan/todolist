import React , { Component } from 'react';
/** 此组件是form表单的应用 */

class CommentBoxNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e){
        this.props.onAddComment(this.state.value);
        this.setState({
            value: ''
        })
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
                    <p>已有{this.props.listLen}条留言数</p>
                </div>
            </form>
        )
    }
}

export default CommentBoxNew;