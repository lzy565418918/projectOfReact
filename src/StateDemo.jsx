import React from 'react'
export default class StateDemo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    changeState = async () => {
        // setState是异步函数,可以用async+await变成同步
        await this.setState({
            num: this.state.num+1
        })
        console.log(this.state.num)
        // this.setStateAsync({num:this.state.num+1})
    }

    // setStateAsync(state) {
    //     return new Promise(resolve => {
    //         this.setState(state,resolve)
    //     })
    // }

    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.changeState}>加一</button>
            </div>
        )
    }
}