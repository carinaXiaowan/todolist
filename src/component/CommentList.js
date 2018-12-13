import React from 'react';
//当一个组件没有生命周期且无状态转变，只是为了展示数据，使用函数式组件
function CommentList(props){
    const { list } = props;
    return (
        <div className='comment-list-component p-5'>
            <label>评论列表</label>
            <ul className='list-group mb-3'>
            { list.map( (item, index) => {
                return (
                    <li className='list-group-item' key = {index}> {item} </li>
                )
            }) }
            </ul>
        </div>
    )
}
export default CommentList;