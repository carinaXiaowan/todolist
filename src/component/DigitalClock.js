import React , { Component } from 'react';

class DigitalClock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentWillMount(){ 
        //console.info(1)
    }

    render(){
       // console.info('render')
        return (
            <div className='digital-clock-component jumbotron'>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

    componentDidMount(){
       // console.info(2)
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },3000)
    }

    componentWillUpdate(prevProps, prevState){
        //console.info(prevState)
    }

    //{date: Tue Dec 11 2018 16:34:05 GMT+0800 (中国标准时间)} prevState
    //{date: Tue Dec 11 2018 16:34:11 GMT+0800 (中国标准时间)} nextState

    componentDidUpdate(nextProp, nextState){
       // console.info(nextState)
    }

    componentwillUnMount(){
        console.info(5)
        clearInterval(this.timer)
    }
}

export default DigitalClock;