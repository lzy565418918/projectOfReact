import React, { Component } from 'react'
// react利用PropTypes进行类型检查
import PropTypes from 'prop-types';
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

Child.propTypes = {
    current: PropTypes.string,
    // 可以指定几种类型中的一种
    money: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}