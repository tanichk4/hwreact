import useFetch from "../useFetch";
import User from "./User";
const UsersList = () => {
  const {
    loading,
    error,
    data: users,
  } = useFetch("https://jsonplaceholder.typicode.com/users?_limit=10");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>USERS</h3>
      {users.map((user) => (
        <User
          key={user.id}
          username={user.username}
          name={user.name}
          email={user.email}
          address={user.address.street}
          phone={user.phone}
          company={user.company.name}
        />
      ))}
      <hr />
    </div>
  );
};

export default UsersList;
