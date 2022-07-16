import { useState, useEffect } from 'react';
import ShowUsers from './pages/ShowUsers';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <ShowUsers users={users} />
    </>
  );
}
export default App;
