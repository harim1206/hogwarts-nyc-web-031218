import React, { Component } from 'react'

class HogDetails extends Component {

  render() {
    return(
      <div >
        <ul>
          <li>Specialty: {this.props.specialty}</li>
          <li>Greased: {this.props.greased.toString()}</li>
          <li>Weight: {this.props.weight}</li>
          <li>Medal: {this.props.medal}</li>
        </ul>
      </div>
    )
  }
}

export default HogDetails
