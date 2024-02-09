import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import Sidebar from '../components/Sidebar';

const RootLayout = () => {
  return (
    <div
      style={{
        height: 'calc(100vh - 3rem)',
      }}
      className='w-full pt-12'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
