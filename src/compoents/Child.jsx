import React, { Component } from 'react'
export default class Child extends Component{
    render() {
        return (
            <div>
                <h5>{this.props.current}</h5>
                <p>{this.props.money}</p>
            </div>
        )
    }
}