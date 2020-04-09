import React from 'react'

export default class Mynav extends React.Component{
    render() {
        return (
                <ul>
                {
                    //props不可以修改
                    this.props.nav.map((item, index) => <li key={index}>{item}</li>)
                }
                </ul>
        )
    }
}