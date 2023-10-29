import React from 'react';

export default function Card({ title, body }) {
  return (
    <div className='p-6 bg-base-300 shadow-lg rounded-lg mb-5'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className=' text-sm'>username</p>
      </div>

      <div className='mt-4'>
        <p>{body}</p>
      </div>
    </div>
  );
}
