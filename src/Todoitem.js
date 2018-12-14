import React, { Component } from 'react';

class Todoitem extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        console.info(this.props)
    }
    handleDelete(){ 
        const { deletes , index} = this.props;
        deletes({index}); //回调父元素属性deletes绑定的方法。（向父元素传值要删除的索引号index）
    }
    render(){
        const { content } = this.props;  //解构赋值 this.props = {content: "learning-react", index: 0, delete: ƒ}
        return (
            <li onClick={this.handleDelete}>{ content }</li>
        )
    }
}

export default Todoitem;