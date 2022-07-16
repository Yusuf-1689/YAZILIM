import { createContext } from 'react';
import { useState } from 'react';

//? 1- Defining
export const UserContext = createContext();

//? 2- Provider Component
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, width) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, width: width } : user
      )
    );
  };
  const values = { users, changeWidth };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;