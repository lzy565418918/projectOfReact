import React from 'react'
export default class Statestudy extends React.Component{
    constructor() {
        super()
        // 定义state(相当于vue组件中data里定义的数据)
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        this.setState({num:10})
    }
    render() {
        return (
            <div>
                <h5>组件中的state</h5>
                {/* 改变state中的数据 */}
                <button onClick={()=>{this.setState({num:this.state.num+1})}}>+</button>
                <span>{this.state.num}</span>
                <button onClick={()=>{this.setState({num:this.state.num-1})}}>-</button>
            </div>
        )
    }
}