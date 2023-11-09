'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  

  async function userLogin(e) {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:8888/auth/login', {
        email,
        password,
      });
      router.push('/');
      // console.log('login success', res.data.token);
      sessionStorage.setItem('token', res.data.accessToken)
    } catch (error) {
      console.log('login error', error);
      setErrorMessage('invalid email or password');
    }
  }

  return (
    <form onSubmit={userLogin}>
      <div className=' mt-6 mr-6  h-3/6'>
        <div>
          <p className='font-semibold text-lg'>Email</p>
          <input type='email' placeholder='your@email.here' value={email} onChange={(e) => setEmail(e.target.value)} className='input input-bordered input-primary w-full ' />
        </div>
        <div className='mt-6'>
          <p className='font-semibold text-lg'>Password</p>
          <input type='password' placeholder='your password' value={password} onChange={(e) => setPassword(e.target.value)} className='input input-bordered input-primary w-full ' />
        </div>
        <button type='submit' className='btn btn-accent mt-6 w-full'>
          Login
        </button>
        <p className='text-red-400'>{errorMessage}</p>
      </div>
    </form>
  );
}
