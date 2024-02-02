import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const RootLayout = () => {
  return (
    <div className='w-full h-screen pt-12'>
      <Header />
      <Outlet />
    </div>
  );
};
export default RootLayout;
