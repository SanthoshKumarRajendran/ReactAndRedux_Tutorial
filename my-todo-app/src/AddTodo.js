import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleInputChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.content)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Add new Todo: </label>
          <input type="text" onChange={this.handleInputChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTodo
