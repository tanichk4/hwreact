import useFetch from "../useFetch";
import useToggle from "../useToggle";
import { useState } from "react";

const User = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isOpen, toggle] = useToggle(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const Content = () => {
    return (
      <div>
        <h3>Contact Info</h3>
        <p>
          Address: {user.address.street}, {user.address.suite},{" "}
          {user.address.city}
        </p>
        <p>Phone: {user.phone}</p>
        <h3>Company Info</h3>
        <p>{user.company.name}</p>
      </div>
    );
  };

  const {
    loading,
    error,
    data: user,
  } = useFetch("https://jsonplaceholder.typicode.com/users/1");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <div>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <button onClick={toggle}>Show More</button>
          {isOpen && <Content />}
        </div>
      </div>

      <div>
        <h2>{user.name}</h2>
        <button onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "See Details"}
        </button>
        {showDetails && <Content />}
        <hr />
      </div>
    </>
  );
};

export default User;
