import React from 'react';
import Drawer from './Drawer';

export default function Navbar() {
  return (
    <div className='flex justify-center p-6 shadow-md'>
      <div className='w-full flex justify-between items-center '>
        <div className='flex w-2/12  items-center'>
          <Drawer />
          <h2 className='text-2xl text-blue-500 font-bold'>Burung biru</h2>
        </div>
        <input type="search" placeholder='Search here...' className='w-4/12 rounded-lg py-2 px-4 bg-transparent border border-purple-600' />
        <div className='w-[200px] justify-between flex'>
          <button className='btn btn-primary'>Log in</button>
          <button className='btn btn-default'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
