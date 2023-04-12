import { withToggler } from "../HOCs/withToggler";

const Comment = ({ email, name, body, toggled, changeToggle }) => {
  return (
    <div>
      <hr />
      <h4>
        <span>Comment: {name}</span>
        <button onClick={changeToggle}>{toggled ? "<3" : ":/"}</button>
      </h4>
      <p>email: {email}</p>
      <p>body: {body}</p>
    </div>
  );
};

export default withToggler(Comment);
