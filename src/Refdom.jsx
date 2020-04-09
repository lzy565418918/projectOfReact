import React, { Component } from 'react'

export default class Refdom extends Component{
    constructor() {
        super()
        this.state = {
            title: 'ref和dom'
        }
    }
    componentDidMount() {
        console.log(this.domdiv)
    }
    changeDom = (val) => {
        this.setState({
            title: val
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.title}</div>
            </div>
        )
    }
}