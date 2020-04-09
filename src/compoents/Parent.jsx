import React, { Component } from 'react'
import Chlid from './Child'

export default class Parent extends Component{

    constructor() {
        super()
        this.state = {
            money: 0
        }
    }
    fnChange = (e) => {
        this.setState({ money: e.target.value })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.money} onChange={this.fnChange} />
                <Chlid current="人民币：" money={this.state.money} />
                <Chlid current="美元：" money={this.state.money && this.state.money * 7} />
            </div>
        )
    }
}