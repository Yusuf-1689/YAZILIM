

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
  }, []);
  console.log(users);
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default UseMemoCallBack;