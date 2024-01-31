import { Navigate } from 'react-router-dom';
import RootLayout from '../RootLayout';
const ProtectedPages = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <RootLayout /> : <Navigate to='/sign-in' />;
};
export default ProtectedPages;
