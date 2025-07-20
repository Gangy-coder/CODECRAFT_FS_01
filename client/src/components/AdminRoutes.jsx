import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AdminRoute = ({ children }) => {
  const {userData } = useContext(AppContext);

  // if (!isLoggedin) {
  //   return <Navigate to="/auth" />;
  // }
console.log(userData?.role)
  if (userData?.role !== 'admin') {
    return <Navigate to="/" />; // or a 403 page
  }

  return children;
};

export default AdminRoute;