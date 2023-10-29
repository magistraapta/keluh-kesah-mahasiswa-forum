import React from 'react';
import SignupForm from './components/SignupForm';
import Image from 'next/image';
import SignupPict from '../assets/login-pict.jpeg'
export default function page() {
  return (
    <div className='flex justify-center  items-center h-screen'>
      <div className='p-8  w-11/12 bg-primary text-white flex rounded-md'>
        <div className='w-6/12 '>
          <h1 className='font-bold text-5xl leading-tight'>Join us in the biggest student community platform</h1>
          <SignupForm />
        </div>
        <div className='w-6/12 items-center flex'>
          <Image alt='login-pict' src={SignupPict} className='rounded-lg items-center h-full' />
        </div>
      </div>
    </div>
  );
}
