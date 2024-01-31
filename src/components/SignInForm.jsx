import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    // setError,
    formState: {
      errors,
      //  isSubmitting
    },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='w-auto h-auto bg-white p-6 rounded-md'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 border-b border-gray-400 pb-4'>
        <input
          {...register('email')}
          type='text'
          placeholder='Email address'
          className='w-[22rem] border-gray-400 border text-lg px-4 py-[.9rem] rounded-md'
        />
        {errors.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}
        <input
          {...register('password')}
          type='password'
          placeholder='Password'
          className='w-[22rem] border-gray-400 border text-lg px-4 py-[.9rem] rounded-md '
        />
        {errors.password && (
          <p className='text-red-500 text-sm'>{errors.password.message}</p>
        )}
        <button
          type='submit'
          className='w-[22rem] px-4 py-[.9rem] bg-green-400 rounded-md  font-bold text-white text-lg '>
          Log in
        </button>
      </form>

      <button
        type='button'
        className='w-[22rem] px-4 py-[.9rem] bg-gray-500 rounded-md mt-4 font-bold text-white text-lg '>
        Create new account
      </button>
    </section>
  );
};
export default SignInForm;
