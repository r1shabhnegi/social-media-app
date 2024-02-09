import { FaAngleLeft } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className='relative'>
      <div className='absolute h-full bg-red-100 w-60'>Sidebar</div>
      <div className='absolute top-1/2'>
        <FaAngleLeft />
      </div>
    </div>
  );
};
export default Sidebar;
