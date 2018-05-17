import React, { Component } from 'react'

import HogDetails from './HogDetails.js'

class HogTile extends Component{

  render(){
    console.log(this.props);
    return (
      <div className="ui eight wide column">
        <p> {this.props.name} </p>
        <img src={this.props.url} alt="pig pic" />
        <HogDetails specialty={this.props.specialty} greased={this.props.greased} weight={this.props.weight} medal={this.props.medal}/>
      </div>
    )
  }
}



export default HogTile
