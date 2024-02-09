import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useCreateAccount,
  useSignInAccount,
} from '../services/tanstack/queriesAndMutation';
import { fetchAuth } from '../services/redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { AlertDefault } from './ui/AlertDefault';
import { Spinner } from '@material-tailwind/react';

const schema = z.object({
  name: z.string().min(2, { message: 'Must be 2 or more characters long' }),
  username: z.string().min(2, { message: 'Must be 2 or more characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
});

const SignUpForm = ({ handleCancelButton }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutateAsync: createAccount } = useCreateAccount();
  const { mutateAsync: signInAccount } = useSignInAccount();

  const onSubmit = async (data) => {
    try {
      const newUserSession = await createAccount(data);
      // if (newUserSession) {
      //   return AlertDefault();
      // }

      if (!newUserSession) throw new Error();

      const signInSession = await signInAccount({
        email: data.email,
        password: data.password,
      });

      if (!signInSession) throw new Error();

      const checkAuth = dispatch(fetchAuth());

      if (checkAuth) {
        navigate('/');
      }
      console.log(checkAuth);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  return (
    <div className='relative'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 pb-4 w-[20rem]'>
        <input
          type='text'
          placeholder='name'
          {...register('name')}
          className=' border-gray-400 border text-lg text-gray-800 px-4 py-[.9rem] rounded-md focus:border-0 focus:outline-none focus:ring-2 focus:ring-gray-500 '
        />
        {errors.name && (
          <p className='text-sm text-red-500'>{errors.name.message}</p>
        )}
        <input
          type='text'
          placeholder='username'
          {...register('username')}
          className=' border-gray-400 border text-lg text-gray-800 px-4 py-[.9rem] rounded-md focus:border-0 focus:outline-none focus:ring-2 focus:ring-gray-500 '
        />
        {errors.username && (
          <p className='text-sm text-red-500'>{errors.username.message}</p>
        )}
        <input
          type='text'
          placeholder='email'
          {...register('email')}
          className=' border-gray-400 border text-lg text-gray-800 px-4 py-[.9rem] rounded-md focus:border-0 focus:outline-none focus:ring-2 focus:ring-gray-500 '
        />
        {errors.email && (
          <p className='text-sm text-red-500'>{errors.email.message}</p>
        )}
        <input
          type='password'
          placeholder='password'
          {...register('password')}
          className=' border-gray-400 border text-lg text-gray-800 px-4 py-[.9rem] rounded-md focus:border-0 focus:outline-none focus:ring-2 focus:ring-gray-500 '
        />
        {errors.password && (
          <p className='text-sm text-red-500'>{errors.password.message}</p>
        )}
        <button
          type='submit'
          disabled={isSubmitting}
          className={` px-4 py-[.9rem] ${
            isSubmitting ? 'bg-green-300' : 'bg-green-500'
          }  rounded-md  font-bold text-white text-lg`}>
          Sign up
        </button>
      </form>
      <button
        onClick={handleCancelButton}
        className='absolute w-10 h-10 text-2xl font-bold text-gray-800 bg-gray-400 rounded-full -right-10 -top-10'>
        X
      </button>
    </div>
  );
};
export default SignUpForm;
