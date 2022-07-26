import React, { useEffect } from 'react';

const Users = ({ users }) => {
  console.log('Users Component Rendered');

  return (
    <div className='users'>
      <button id='add-button' onClick={null}>
        Add User
        </button>
      {users?.map((user) => null)}
    </div>
  );
};

export default Users;