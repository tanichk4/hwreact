const User = ({ username, name, email, address, phone, company }) => {
  return (
    <div>
      <h3>{username}</h3>
      <h5>{name}</h5>
      <p>email: {email}</p>
      <p>address: {address}</p>
      <p>phone: {phone}</p>
      <p>company: {company}</p>
      <hr />
    </div>
  );
};

export default User;
