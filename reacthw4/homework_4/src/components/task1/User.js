import React, { useState, useEffect } from 'react';

const User = () => {
  const [user, setUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!user) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'See Details'}
      </button>
      {showDetails && (
        <div>
          <h3>Contact Info</h3>
          <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
          <p>Phone: {user.phone}</p>
          <h3>Company Info</h3>
          <p>{user.company.name}</p>
        </div>
      )}
      <hr />
    </div>
  );
};

export default User;
