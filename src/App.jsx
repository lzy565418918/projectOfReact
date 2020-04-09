import React from 'react'
import Mynav from './Mynav'
import Statestudy from './Statestudy'
import Life from './Life'
import StateDemo from './StateDemo'
import Refdom from './Refdom'

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '改变props前'
    }
    this.refdom = React.createRef()
  }
  receiveSon = (val) => {
    this.setState({title:val})
  }
  changee = (val) => {
    this.refdom.current.changeDom(val)
  }
  render() {

    // const arr1 = ['首页','视频']
    // const arr2 = ['HOME','VEDIO']
    return (
      <div>
        <h5>React</h5>
        {/* <Mynav nav={arr1} />
        <Mynav nav={arr2} /> */}
        {/* <Statestudy />
        <Life title={this.state.title} changefa={this.receiveSon} />
        <StateDemo/> */}
        <Refdom ref={this.refdom} />
        <button onClick={() => { this.changee('点击change') }}>点击change</button>
      </div>
    )
  }
}