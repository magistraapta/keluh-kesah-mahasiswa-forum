import React from 'react';
import Account from './Account';
import LoginSignin from './LoginSignin';

export default function Navbar() {
  const isLogin = false
  return (
    <div className='flex justify-center p-6 shadow-md sticky top-0 bg-base-100'>
      <div className='w-full flex justify-between items-center '>
        <div className='flex w-2/12  items-center'>
          <h2 className='text-2xl text-primary-content font-bold'>
            Keluh-kesah <br /> mahasiswa
          </h2>
        </div>
        <input type='search' placeholder='Search here...' className='w-4/12 rounded-lg py-2 px-4 bg-transparent border border-primary-content' />
        {
          isLogin ? <Account/> : <LoginSignin/>
        }
      </div>
    </div>
  );
}
