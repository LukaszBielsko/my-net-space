import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    fetch("https://mighty-plains-24471.herokuapp.com/api/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ posts: data });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts ? (
          <div>
            {posts.map(post => (
              <p>{post.title}</p>
            ))}
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}

export default Posts;
