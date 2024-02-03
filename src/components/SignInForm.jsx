import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import SignUpForm from './SignUpForm';
import { useSignInAccount } from '../services/tanstack/queriesAndMutation';
import { useDispatch } from 'react-redux';
import { fetchAuth } from '../services/redux/authSlice';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutateAsync: signInAccount } = useSignInAccount();
  const [model, setModel] = useState(false);

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const signInSession = await signInAccount({
      email: data.email,
      password: data.password,
    });

    if (!signInSession) throw new Error();

    const checkAuth = dispatch(fetchAuth());

    if (checkAuth) {
      navigate('/');
    }
  };

  return (
    <section className='w-auto h-auto p-6 bg-white rounded-md'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 pb-4 border-b border-gray-400'>
        <input
          {...register('email')}
          type='text'
          placeholder='Email address'
          className='w-[22rem] border-gray-400 border text-lg text-gray-800 px-4 py-[.9rem] rounded-md focus:border-0 focus:outline-none focus:ring-2 focus:ring-gray-500 '
        />
        {errors.email && (
          <p className='text-sm text-red-500'>{errors.email.message}</p>
        )}
        <input
          {...register('password')}
          type='password'
          placeholder='Password'
          className='w-[22rem] border-gray-400 border text-lg text-gray-800 px-4 py-[.9rem] rounded-md focus:border-0 focus:outline-none focus:ring-2 focus:ring-gray-500 '
        />
        {errors.password && (
          <p className='text-sm text-red-500'>{errors.password.message}</p>
        )}
        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-[22rem] px-4 py-[.9rem] ${
            isSubmitting ? 'bg-green-300' : 'bg-green-500'
          }  rounded-md  font-bold text-white text-lg`}>
          Sign in
        </button>
      </form>

      <button
        type='button'
        disabled={isSubmitting}
        className='w-[22rem] px-4 py-[.9rem] bg-gray-500 rounded-md mt-4 font-bold text-white text-lg '
        onClick={() => setModel(!model)}>
        Create new account
      </button>

      {model && (
        <div
          onClick={() => setModel(!model)}
          className='absolute z-50 flex items-center justify-center w-full h-screen bg-gray-300 -top-0 -left-0 opacity-70'></div>
      )}

      {model && (
        <div className='absolute z-50 flex items-center justify-center w-auto h-auto p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md top-1/2 left-1/2'>
          <SignUpForm handleCancelButton={() => setModel(!model)} />
        </div>
      )}
    </section>
  );
};
export default SignInForm;
