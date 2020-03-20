import React, { Component }  from 'react';
import DragonRiders from './DragonRiders';

class App extends Component{
  state = {
    dragonRiders: [
      { name: 'Khaleesi', age: '25', dragon: 'Drogon'},
      { name: 'Jon', age: '32', dragon: 'Rhaegal'},
      { name: 'Arya', age: '19', dragon: 'Viserion'}
    ]
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Westeros's mightly Dragon Riders</h1>
        </header>
        <DragonRiders riders={this.state.dragonRiders}/>
      </div>
    );
  }
}

export default App;
