import SignInForm from './SignInForm'

const Home = () => {
  return (
    <div className='flex'>
        <div className='hidden lg:flex w-1/2 bg-black text-white text-5xl font-extrabold h-screen justify-center items-center'> <div>Board.</div> </div>
        <SignInForm/>
    </div>
  )
}

export default Home