import React, { Component } from 'react'
export default class Compose extends Component{
    render() {
        return (
            <div>
                {/* 类似于vue里面的匿名插槽 */}
                组合的概念：{this.props.children}
            </div>
        )
    }
}