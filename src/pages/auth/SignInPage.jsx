import { SignInForm } from '../../components';
const SignInPage = () => {
  return (
    <main className='w-full bg-[#f0f2f5]'>
      <section className='max-w-6xl h-screen m-auto'>
        <div className='flex h-screen'>
          <div className='w-1/2 flex flex-col p-5 justify-center items-center'>
            <p className='text-7xl w-full text-green-300'>circlesss</p>
            <p className='text-4xl w-full '>
              Build and join your favorite community.
            </p>
          </div>

          <div className=' w-1/2 flex justify-center items-center p-5'>
            <SignInForm />
          </div>
        </div>
      </section>
    </main>
  );
};
export default SignInPage;
