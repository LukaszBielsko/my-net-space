import React, { Component } from "react";

class Posts extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    const example = async () => {
      return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => {
          this.state({ post: data });
        });
    };
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        {post ? (
          <div>
            <p>{post.title}</p>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}

export default Posts;
