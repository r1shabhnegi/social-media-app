import { Link, useLocation } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import searchIcon from '../assets/search-icon.svg';
import { IoMdAdd } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { FaAngleDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { useSignOutAccount } from '../services/tanstack/queriesAndMutation';
import { setAuth, setStatus, setUserData } from '../services/redux/authSlice';
import { useEffect } from 'react';

const Header = () => {
  const { userData } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  console.log(pathname);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutateAsync: signOutAccount, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) {
      navigate('/sign-in');
      dispatch(setAuth(false));
      dispatch(setUserData({}));
      dispatch(setStatus('rejected'));
    }
  }, [isSuccess]);

  return (
    <header className='fixed top-0 left-0 z-50 flex items-center justify-between w-full h-12 px-10 bg-gray-50'>
      {/* Logo */}
      <Link to='/'>
        <p className='text-4xl text-green-500 '>circlesss</p>
      </Link>

      {/* Opened page and menu */}
      <div className='flex items-center w-64 gap-5 rounded h-9'>
        {pathname.includes('/') && <GoHomeFill className='w-6 h-6 ml-2' />}
        <p className='pt-1 text-sm'>Home</p>
      </div>

      {/* search */}
      <div className='relative '>
        <input
          type='text'
          style={{
            backgroundImage: 'url(../assets/search-icon.svg)',
          }}
          className='bg-gray-200 w-[40rem] h-10 rounded-full outline-none bg-no-repeat bg-left-top pl-12'
          placeholder={`Search...`}
        />
        <img
          src={searchIcon}
          className='absolute w-6 h-6 left-4 top-2'
          alt='search icon'
        />
      </div>

      {/* create icon */}
      <button className='flex items-center gap-3 mr-10 '>
        <IoMdAdd className='w-8 h-8' />
        <p className='pt-1'>Create</p>
      </button>

      {/* profile and menu */}

      <Menu>
        <MenuHandler>
          {/* <Button>Menu</Button> */}

          <div className='flex items-center justify-between cursor-pointer w-60'>
            <div className='flex items-center gap-3'>
              <img
                src={userData.imageUrl}
                alt='profile-pic'
                className='w-8 h-8 rounded'
              />
              <p className='text-sm'>{userData.username}</p>
            </div>
            <div>
              <FaAngleDown />
            </div>
          </div>
        </MenuHandler>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>
            <div
              className='flex items-center justify-between w-48 cursor-pointer'
              onClick={() => signOutAccount()}>
              <p>Logout</p>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};
export default Header;
