import React from 'react';

export default function SignupForm() {
  return (
    <div className=' mt-6 mr-6  h-3/6'>
      <div>
        <p className='font-semibold text-lg'>Email</p>
        <input type='text' placeholder='your@email.here' className='input input-bordered input-primary w-full ' />
      </div>
      <div className='mt-6'>
        <p className='font-semibold text-lg'>Password</p>
        <input type='text' placeholder='your password' className='input input-bordered input-primary w-full ' />
      </div>
      <div className='mt-6'>
        <p className='font-semibold text-lg'>Username</p>
        <input type='text' placeholder='your password' className='input input-bordered input-primary w-full ' />
      </div>
      <a href='/'>
        <button className='btn btn-accent mt-6 w-full'>Sign Up</button>
      </a>
    </div>
  );
}
