const Post = (props) => {
  return (
  
    <li>
        {/* <li>{props.post.title}</li>
    <hr /> */}
        <div>{`Title: ${props.post.title} - completed: ${props.post.completed}`}</div>
    </li>
  )
};

export default Post