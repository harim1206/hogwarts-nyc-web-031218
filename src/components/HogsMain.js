import React, { Component } from 'react'
import HogTile from './HogTile.js'


class HogsMain extends Component{

  render(){
    // debugger
    const hogsTiles = this.props.hogs.map((hog) => {
      return <HogTile name={hog.name} url={hog.imgUrl}  specialty={hog.specialty} greased={hog.greased} weight={hog[this.props.weightKey]}
      medal={hog[this.props.medalKey]}/>
    })

    return (

      <div className="ui grid container">
        {hogsTiles}
      </div>


    )
  }
}

HogsMain.defaultProps = {
  medalKey: 'highest medal achieved',
  weightKey: 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
}

export default HogsMain
