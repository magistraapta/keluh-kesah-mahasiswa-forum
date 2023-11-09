import React from 'react';
import Image from 'next/image';
import LoginPict from '../assets/login-pict.jpeg'
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div className='flex justify-center  items-center h-screen'>
      <div className='p-8  w-11/12 h-5/6 bg-primary text-white flex rounded-md'>
        <div className='w-6/12 '>
          <h1 className='font-bold text-5xl leading-tight'>Join us in the biggest  student community platform</h1>
          <LoginForm/>
        </div>
        <div className=' h-full w-6/12  items-center flex'>
            <Image alt='login-pict' src={LoginPict} className='rounded-lg h-full'/>
        </div>
      </div>
    </div>
  );
}
