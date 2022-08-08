import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRouter = () => {
    const {currentUser} = useContext(AuthContext);
  // console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;