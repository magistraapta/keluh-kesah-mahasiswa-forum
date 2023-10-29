import React from 'react';
import Card from './Card';
import Link from 'next/link';
import axios from 'axios';

async function getFeed(){
  try {
    const res = await axios.get('http://localhost:8888/feed')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export default async function Content() {
  const feed = await getFeed()
  const data = feed.result
  return (
    <div>
      <div className='flex justify-center  mt-4'>
        <div className='flex justify-between w-8/12 p-6 shadow-lg bg-base-300 rounded-lg items-center'>
          <input type='text' placeholder='Tulis keluh kesah mu' className='input w-11/12 '  />
          <button  className='btn btn-primary'>Send</button>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <div className=' w-8/12'>
          {data.map((item, index) => (
            <Link key={index} href={`post/${item.id}`}>
              <Card  title={item.title} body={item.content} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
