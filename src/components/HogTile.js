import React, { Component } from 'react'

import HogDetails from './HogDetails.js'

class HogTile extends Component{
  state = {
    clicked: false
  }

  handleClick = () => {
    const toggle = !this.state.clicked
    this.setState({clicked: toggle})
  }

  render(){
    if(this.state.clicked === true) {
      return (
        <div className="ui eight wide column tiles" onClick={this.handleClick}>
          <p> {this.props.name} </p>
          <img src={this.props.url} alt="pig pic" />
          <HogDetails specialty={this.props.specialty} greased={this.props.greased} weight={this.props.weight} medal={this.props.medal}/>
        </div>
      )
    }else {
      return(
        <div className="ui eight wide column tiles" onClick={this.handleClick}>
          <p> {this.props.name} </p>
          <img src={this.props.url} alt="pig pic" />
        </div>
      )
    }

  }
}



export default HogTile
