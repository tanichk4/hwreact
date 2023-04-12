import Post from "./Post";

const Posts = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
