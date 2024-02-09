import { SignInForm } from '../../components';
const SignInPage = () => {
  return (
    <main className='  bg-[#f0f2f5] py-40'>
      <section className='max-w-5xl m-auto py-9'>
        <div className='flex items-center justify-center lg:mx-10 '>
          <div className='flex-col justify-center hidden p-5 lg:flex'>
            <p className='text-green-500 transform lg:text-7xl'>circlesss</p>
            <p className='mt-2 text-4xl '>
              Build and join your favorite community.
            </p>
          </div>

          <div className='relative w-[22rem] flex items-center justify-center lg:w-[30rem] drop-shadow-2xl'>
            <p className='absolute text-5xl text-green-500 transform -top-20 lg:hidden lg:text-7xl'>
              circlesss
            </p>
            <SignInForm />
          </div>
        </div>
      </section>
    </main>
  );
};
export default SignInPage;
