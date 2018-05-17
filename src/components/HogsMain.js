import React, { Component } from 'react'
import HogTile from './HogTile.js'


class HogsMain extends Component{

  render(){
    // debugger

    const hogsTiles = this.props.hogs.map((hog) => {
      return <HogTile name={hog.name} specialty={hog.specialty} greased={hog.greased} />
    })

    return (
      <div className="ui grid container">
        {hogsTiles}
      </div>


    )
  }
}



export default HogsMain
