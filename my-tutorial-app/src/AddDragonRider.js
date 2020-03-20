import React, { Component } from 'react'

class AddDragonRider extends Component {
  state = {
    name: null,
    age: null,
    dragon: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addDragonRider(this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>

          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange}/>

          <label htmlFor="dragon">Dragon:</label>
          <input type="text" id="dragon" onChange={this.handleChange}/>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddDragonRider
