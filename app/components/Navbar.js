import React from 'react';
import Account from './Account';
import LoginSignin from './LoginSignin';
import Link from 'next/link';

export default function Navbar() {
  const isLogin = true;
  return (
    <div className='flex justify-center p-6 shadow-md sticky top-0 bg-base-100'>
      <div className='w-full flex justify-between items-center '>
        <div className='flex items-center'>
          <Link href={'/'}>
            <h2 className='text-2xl text-primary-content font-bold'>
              Keluh-kesah <br /> mahasiswa
            </h2>
          </Link>
        </div>
        <input type='search' placeholder='Search here...' className=' w-8/12 rounded-lg py-2 px-4 bg-transparent input-bordered input' />
        {isLogin ? <Account /> : <LoginSignin />}
      </div>
    </div>
  );
}
