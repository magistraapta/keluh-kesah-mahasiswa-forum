import React from 'react';

export default function LoginSignin() {
  return (
    <div className='w-[200px] justify-between flex'>
      <a href='/login'>
        <button className='btn btn-primary'>Login</button>
      </a>
      <a href='/signup'>
        <button className='btn btn-outline btn-primary'>Sign Up</button>
      </a>
    </div>
  );
}
