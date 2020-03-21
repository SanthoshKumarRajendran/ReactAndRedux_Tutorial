import React, { Component} from 'react'
import axios from 'axios'
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
  }

  postList = () => {
    return (
      this.state.posts.length ? (
          this.state.posts.map(post => {
            return(
              <div className="card post" key={post.id}>
                <img src={Pokeball} alt="A pokeball" />
                <div className="card-content">
                  <span className="card-title">{post.title}</span>
                  <p>{post.body}</p>
                </div>
              </div>
            )
          })
        ) : (
          <div className="center">
            No Posts Yet
          </div>
        )
    )
  }

  render(){
    return (
      <div className="container home">
        <h4 className="center"> This is the home page </h4>
        {this.postList()}
      </div>
    )
  }
}

export default Home
