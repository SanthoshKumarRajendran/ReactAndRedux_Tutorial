import React, { Component} from 'react'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

const Home = ({posts}) => {
  const postList = posts.length ? (
    posts.map(post => {
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

  return (
    <div className="container home">
      <h4 className="center"> This is the home page </h4>
      {postList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return  {
    posts: [...state.posts, {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }]
  }
}

export default connect(mapStateToProps)(Home)
