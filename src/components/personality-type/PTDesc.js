import React, { Component } from 'react'

class PTDesc extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    console.log(props)
    const { type, TYPE } = props.location.state
    this.state = {
      type: type,
      TYPE: TYPE,
    };
    
  }
  // componentDidMount () {

  // }
  render(){
    return (
      <div>
        <h2>{this.state.TYPE}の性格</h2>
        <p>{this.state.TYPE}は...............</p>
        <h2>{this.state.TYPE}の有名人</h2>
        <p>{this.state.TYPE}は...............</p>
        <h2>向いている仕事</h2>
        <p>{this.state.TYPE}は...............</p>
      </div>
    )
  }
}

export default PTDesc