import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play some Mario Kart'}
    ]
  }

  newId = () => Math.floor(Math.random() * 100)

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos: todos})
  }

  addTodo = (todo) => {
    const newTodoList = [...this.state.todos, {id: this.newId(), content:todo}]
    this.setState({todos: newTodoList})
  }

  render() {
    return (
      <div className="MyApp container">
        <h1 className="center green-text"> My ToDo App</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
