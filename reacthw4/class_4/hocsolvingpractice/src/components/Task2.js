import PostsList from "./PostsList";
import { NewCommentsList } from "./CommentsList";

const POSTS_BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
const COMMENTS_BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'

const Task_2 = () => {
  return (
    <div>
      <PostsList url={POSTS_BASE_URL}/>
      <NewCommentsList url={COMMENTS_BASE_URL}/>
    </div>
  );
};

export default Task_2