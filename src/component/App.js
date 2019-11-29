import React , { Component } from 'react';
import DigitalClock from './DigitalClock';
import LikeButton from './likeButton';
import NodeCard from './NodeCard'
import CommentBox from './CommentBox';
import CommentWrap from './CommentWrap'
const ThemeContext = React.createContext('light');
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
                carina11111
                <ThemeContext.Provider value="dark">
                    <Toolbar />
                </ThemeContext.Provider>

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

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  
class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
      return <div >我是context传值{this.context}</div>;
    }
}

export default App;