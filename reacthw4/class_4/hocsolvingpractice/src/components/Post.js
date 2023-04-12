import { withToggler } from "../HOCs/withToggler";

const Post = ({ id, title, body, toggled, changeToggle }) => {
  return (
    <div>
      <h4 onClick={() => changeToggle(true)}>
        {id}) {title}
      </h4>
      {toggled && <p onClick={() => changeToggle(false)}>{body}</p>}
    </div>
  );
};

export default withToggler(Post);
