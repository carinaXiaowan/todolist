import React , { Component } from 'react';

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        }

        this.addLikeCount = this.addLikeCount.bind(this);
    }

    addLikeCount(e){
        console.info(e)
        this.setState({
            likes: this.state.likes+1
        })
    }

    render(){
        return (
            <div className = 'likes-button-component' style={{ margin: '20px 0' }} >
                <button type='button' className='btn btn-outline-primary btn-lg' onClick = {this.addLikeCount}>
                    <span role='img' aria-label="likes">👍</span>{this.state.likes}
                </button>
            </div>
        )
    }
}

export default LikeButton;