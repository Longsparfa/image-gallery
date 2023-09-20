import { useState } from 'react';
import Card from '../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate();


    const loginUser = async (e) => {
      e.preventDefault();
      setIsloading(true);

      try {
        await signInWithEmailAndPassword(auth, email, password);
        setIsloading(false);
        toast.success('Login Successful...');
        navigate('/');

      } catch (error) {
        setIsloading(false);
        toast.error(error.message);
      }
    }


  return (
    <>
    <ToastContainer />
    {isLoading && <Loader />}
    <section className='container min-h-[80vh] flex justify-center items-center'>
       <Card>
        <div className='w-full p-[1.5rem] animate-[slide-up-0.5s-ease]'>
          <h2 className='text-center text-[#0f1624]'>Login</h2>
          <form name='login' onSubmit={loginUser}>
            <input type="email" className='block text-[1.6rem] font-light p-2 md:p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="Password" className='block text-[1.6rem] font-light p-2 md:p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type='submit' className='bg-[#0f1624] text-white p-2 rounded-[5px] w-[100%]'>Login</button>
            
          </form>
        
          <span className='flex justify-center items-center mt-[1rem]'>
            <p>Don't have an account?</p>
            <Link to="/register" className='font-bold pl-2'>Register</Link>
          </span>
        </div>
        </Card>
      </section>
      </>
  )
}

export default Login;