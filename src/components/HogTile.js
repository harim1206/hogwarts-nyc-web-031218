import React, { Component } from 'react'
import hogs from '../porkers_data';


class HogTile extends Component{


  render(){
    // debugger
    return (

      <div className="ui eight wide column">
        <p> {this.props.name} </p>
        <p> {this.props.specialty} </p>
        <p> {this.props.greased.toString()} </p>
      </div>


    )
  }
}



export default HogTile
