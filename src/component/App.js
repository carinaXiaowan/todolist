import React , { Component } from 'react';
import DigitalClock from './DigitalClock';
import LikeButton from './likeButton';
import NodeCard from './NodeCard'
import CommentBox from './CommentBox';
import CommentWrap from './CommentWrap'
class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            tags: ['仙女','angel']
        }
    }

    render(){
        return (
            <div>
                {/* 名片 */}
                <NodeCard name = 'carina' number={15962457620} isHuman = {true} tags = { this.state.tags } />
                {/* 点赞 */}
                <LikeButton />
                {/* 时间 */}
                <DigitalClock />

                {/* 留言框 */}
                <CommentBox />

                {/* 留言本 */}
                <CommentWrap />
            </div>
        )
    }
}

export default App;