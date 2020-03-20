import React, { Component }  from 'react';
import AddDragonRider from './AddDragonRider'
import DragonRiders from './DragonRiders';

class App extends Component{
  state = {
    dragonRiders: [
      { name: 'Khaleesi', age: '25', dragon: 'Drogon'},
      { name: 'Jon', age: '32', dragon: 'Rhaegal'},
      { name: 'Arya', age: '19', dragon: 'Viserion'}
    ]
  }

  addDragonRider = (dragonRider) => {
    let newDragonRiders = [...this.state.dragonRiders, dragonRider]
    this.setState({
      dragonRiders: newDragonRiders
    })
  }

  killDragonRider = (riderName) => {
    let newDragonRiders = this.state.dragonRiders.filter(rider => {
      if (rider.name === riderName) {
        return false
      }
      return true
    })
    this.setState({
      dragonRiders: newDragonRiders
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Westeros's mightly Dragon Riders</h1>
        </header>
        <AddDragonRider addDragonRider={this.addDragonRider}/>
        <DragonRiders riders={this.state.dragonRiders} killDragonRider={this.killDragonRider}/>
      </div>
    );
  }
}

export default App;
