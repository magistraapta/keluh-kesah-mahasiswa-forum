'use client';
import React, { useState } from 'react';

export default function Comment({data}) {
  // const [inputValue, setInputValue] = useState('');
  // const [commentArray, setCommentArray] = useState([]);

  // const handleInput = (e) => {
  //   setInputValue(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputValue) {
  //     setCommentArray([...commentArray, inputValue]);
  //     setInputValue('');
  //   }
  // };
  
  return (
    <div>
      <div className='flex justify-center  mt-4'>
        <div className=' w-9/12 p-6 shadow-lg bg-base-300 rounded-lg items-center'>
          <div className='flex justify-between'>
            <input type='text' placeholder='Tulis komentar mu' className='input w-11/12 ' />
            <button  className='btn btn-primary'>
              Send
            </button>
          </div>
          <div className='mt-4'>
            {data.map((item) => (
              <div className='p-2' key={item.id}>
                <p className=' text-sm text-white'>{item.comments}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
