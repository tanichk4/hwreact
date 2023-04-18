import React from 'react';

import { WithUserData } from './context';

const UserCard = ({user}) => {
    return (
      <div>{user.name} - {user.age}</div>
    )
}

export default WithUserData(UserCard)