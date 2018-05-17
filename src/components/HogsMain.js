import React, { Component } from 'react'
import HogTile from './HogTile.js'


class HogsMain extends Component{
  state = {
    sortBy: "default"
  }

  handleName = () => {
    console.log("Name Sort");
    this.setState({sortBy: "name"})
  }
  handleWeight = () => {
    console.log("Weight Sort");
    this.setState({sortBy: "weight"})
  }

  render(){
    // debugger
    let orderedHogs = null

    if (this.state.sortBy === "default") {
      orderedHogs = this.props.hogs
    }else if (this.state.sortBy === "name") {
      orderedHogs = this.props.hogs.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }else if (this.state.sortBy === "weight"){
      orderedHogs = this.props.hogs.sort((a, b) => {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    }


    const hogsTiles = orderedHogs.map((hog) => {
      return <HogTile name={hog.name} url={hog.imgUrl}  specialty={hog.specialty} greased={hog.greased} weight={hog[this.props.weightKey]}
      medal={hog[this.props.medalKey]}/>
    })

    return (
      <div>
        <div className="button-container">
          <button onClick={this.handleName}>Sort by Name</button>
          <button onClick={this.handleWeight}>Sort by Weight</button>
        </div>
        <div className="ui grid container">
          {hogsTiles}
        </div>
      </div>


    )
  }
}

HogsMain.defaultProps = {
  medalKey: 'highest medal achieved',
  weightKey: 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
}

export default HogsMain
