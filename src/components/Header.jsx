import { useLocation } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className='fixed top-0 left-0 flex items-center w-full h-12 px-5 bg-gray-100'>
      {/* Logo */}
      <p className='text-4xl text-green-500'>circlesss</p>

      {/* Opened page and menu */}
      <div className='flex items-center px-2 m-5 bg-red-100 rounded h-9 w-60'>
        {pathname.includes('/') && <GoHomeFill className='w-6 h-6' />}
        <p>Home</p>
      </div>

      {/* search */}
    </header>
  );
};
export default Header;
