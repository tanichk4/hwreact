import React from "react";

export const withPosts = (WrappedComponent) => {
    return class extends React.Component {
    state = { posts : [] };
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({posts: json}))
    }

    render() {
        return <WrappedComponent {...this.props} {...this.state}/>;
    }
    }
}