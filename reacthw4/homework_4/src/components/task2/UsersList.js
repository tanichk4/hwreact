import React from "react";
import withFetchingData from "./withFetchingData";
import User from "./User";
const UsersList = ({ data: users, isLoading, error }) => {
  return (
    <div>
      <h3>USERS</h3>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {users &&
        users.map((user) => (
          <User username={user.username} name={user.name} email={user.email} address={user.address.street} phone={user.phone} company={user.company.name}/>
        ))}
      <hr />
    </div>
  );
};

export default withFetchingData(UsersList);
