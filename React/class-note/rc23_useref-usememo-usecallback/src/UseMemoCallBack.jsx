

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {

  const [users, setUsers] = useState([]);
  const [text, setTex] = useState('');
  const [search, setSearch] = useState('');
  console.log('ext', text, 'search', search);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
  }, []);
  console.log(users);
  return (
    <div>
        <input type="search" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSearch}>Search User</button>
      <Users users={users} />
    </div>
  );
};

export default UseMemoCallBack;