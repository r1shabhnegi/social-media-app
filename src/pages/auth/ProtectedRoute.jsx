import { Navigate } from 'react-router-dom';
import RootLayout from '../RootLayout';
import { useSelector } from 'react-redux';

const ProtectedPages = () => {
  const isAuthenticated = useSelector((state) => state.auth.authStatus);
  // const isAuthenticated = true;
  const authStatus = useSelector((state) => state.auth.status);
  console.log(isAuthenticated);

  if (authStatus === 'success') {
    return isAuthenticated ? <RootLayout /> : <Navigate to='/sign-in' />;
  }
};
export default ProtectedPages;
