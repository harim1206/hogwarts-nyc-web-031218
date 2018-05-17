import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogsMain from './HogsMain.js'

class App extends Component {

  state = {
    hogs
  }

  render() {

    return (
      <div className="App">
          < Nav />
          < HogsMain hogs={this.state.hogs}/>


      </div>
    )
  }
}

export default App;
