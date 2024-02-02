import { useLocation } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import searchIcon from '../assets/search-icon.svg';
import { IoMdAdd } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Header = () => {
  const { userData } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className='fixed top-0 left-0 flex items-center justify-between w-full h-12 px-5 bg-green-100'>
      {/* Logo */}
      <p className='mx-3 text-4xl text-green-500'>circlesss</p>

      {/* Opened page and menu */}
      <div className='flex items-center w-64 mx-5 bg-red-100 rounded h-9'>
        {pathname.includes('/') && <GoHomeFill className='w-6 h-6 mx-3' />}
        <p className='pt-1 text-sm'>Home</p>
      </div>

      {/* search */}

      <div className='relative '>
        <input
          type='text'
          style={{
            backgroundImage: 'url(../assets/search-icon.svg)',
          }}
          className={`bg-gray-100 w-[40rem] h-10 rounded-full outline-none bg-no-repeat bg-left-top pl-14`}
          placeholder={`Search...`}
        />
        <img
          src={searchIcon}
          className='absolute w-6 h-6 left-5 top-2'
          alt='search icon'
        />
      </div>

      {/* create icon */}
      <button className='flex items-center mx-5'>
        <IoMdAdd className='w-8 h-8' />
        <p className='pt-1 mx-2'>Create</p>
      </button>

      {/* profile and menu */}
      <div className='flex items-center mx-5'>
        <img
          src={userData.imageUrl}
          alt='profile-pic'
          className='w-8 h-8 rounded'
        />
        <p className='mx-3'>{userData.username}</p>
      </div>
    </header>
  );
};
export default Header;
