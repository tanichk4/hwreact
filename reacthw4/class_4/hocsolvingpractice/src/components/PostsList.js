import React from "react";
import Post from "./Post";
import withFetchingData from "../HOCs/withFetchingData";
const PostsList = ({ data: posts, isLoading, error }) => {
  return (
    <div>
      <h3>POSTS</h3>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {posts &&
        posts.map((post) => (
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            key={post.id}
          />
        ))}
    </div>
  );
};

export default withFetchingData(PostsList);

