import { Component } from 'react';
import Test from './HOC/test';
import { withPosts } from './HOC/withPosts';
class Posts extends Component {
  render() {
    const { posts } = this.props

  return <div>
    <Test />
    {posts.map(post => (
      <div key={post.id}>{post.id} - {post.title}</div>
    ))}
  </div>
}
}

export default withPosts(Posts);
