import Comment from "./Comment";
import withFetchingData from "../HOCs/withFetchingData";

const CommentsList = ({ data: comments, isLoading, error }) => {
  return (
    <div>
      <h3>COMMENTS</h3>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {comments &&
        comments.map((comment) => (
          <Comment
            email={comment.email}
            name={comment.name}
            body={comment.body}
            key={comment.id}
          />
        ))}
    </div>
  );
};

export const NewCommentsList = withFetchingData(CommentsList);
