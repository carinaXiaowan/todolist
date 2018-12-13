import React , { Component } from 'react';
import CommentList from './CommentList';
import CommentBoxNew from './CommentBoxNew';
class CommentWrap extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [ 'this is the first comment' ]
        }
        this.myRef = React.createRef();
        console.info(this.myRef)
        this.addComment = this.addComment.bind(this)
    }

    addComment(comment){
        this.setState({
            list: [...this.state.list, comment]
        })
    }

    render(){
        const { list } = this.state;
        return (
            <div>
                <CommentList list= {list} />
                <CommentBoxNew listLen= {list.length} onAddComment = {this.addComment} />
            </div>
        )
    }
}

export default CommentWrap;