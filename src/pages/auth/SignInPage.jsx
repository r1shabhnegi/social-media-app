import { SignInForm } from '../../components';
const SignInPage = () => {
  return (
    <main className='w-full bg-[#f0f2f5]'>
      <section className='h-screen max-w-6xl m-auto'>
        <div className='flex h-screen'>
          <div className='flex flex-col items-center justify-center w-1/2 p-5'>
            <p className='w-full text-green-500 text-7xl'>circlesss</p>
            <p className='w-full text-4xl '>
              Build and join your favorite community.
            </p>
          </div>

          <div className='flex items-center justify-center w-1/2 p-5 '>
            <SignInForm />
          </div>
        </div>
      </section>
    </main>
  );
};
export default SignInPage;
