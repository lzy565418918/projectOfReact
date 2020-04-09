import React from 'react'
export default class Life extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            num:10
        }
    }

    componentWillMount() {console.log('在组件渲染之前执行') }// 在组件渲染之前执行
    componentDidMount() {console.log('在组件渲染之后执行') }//  在组件渲染之后执行
    shouldComponentUpdate() {return true }//  返回true和false，true代表允许改变，false代表不允许改变
    componentWillUpdate() {console.log('数据在改变之前执行') }//    数据在改变之前执行（state，props）
    componentDidUpdate() {console.log('数据修改完成') }//     数据修改完成（state，props）
    componentWillReceiveProps() {console.log('props发生改变执行') }//  props发生改变执行
    componentWillUnmount() {console.log('组件卸载前执行') }//   组件卸载前执行
    
    render() {
        const { num } = this.state
        return (
            <div>
                <h5>生命周期函数 - {this.props.title}</h5>
                {/* 子传父 */}
                <button onClick={() => this.props.changefa('props以通过子传父改变')}>改变props</button>
                <p>{num}</p>
                <button onClick={()=>{this.setState({num:11})}}>修改state</button>
            </div>
        )
    }
}