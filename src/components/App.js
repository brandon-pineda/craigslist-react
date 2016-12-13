import React, { Component } from 'react';
import Dropdown from './Dropdown';
import CityList from './CityList';
import {californiaCities, regions, us_States} from '../Data/data.js'
import { BrowserRouter, Match, Link } from 'react-router'

class App extends Component {
    constructor(){
        super()
        this.state = {
            region: `/`
        }
    }

    onRegionChange = (region) => {
        this.setState({region})
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Craigslist</h2>
        </div>
        <p className="App-intro">Choose a region</p>
        <Link to={this.state.region}>
            <Dropdown
                items={regions}
                onChange = {this.onRegionChange}/>
        </Link>
        {/* <p>Choose a State/Territory</p>
        <Dropdown
            items={us_States}/>
        <CityList
            items={californiaCities}/> */}
      </div>
    );
  }
}

export default App;
