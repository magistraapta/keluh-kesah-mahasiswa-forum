'use client'
import cardData from '@/app/dummyData';
import Navbar from '@/app/components/Navbar';
import Comment from '../Comment';
import axios from 'axios';
import Cookies from 'js-cookie';

async function getPostById(params) {
  try {
    const res = await axios.get(`http://localhost:8888/post/${params.slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const token = sessionStorage.getItem('token');
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function comment(id) {
  try {
    const res = await axios.post(`http://localhost:8888/post/${params.slug}/comment`, {
      comment: '',
    });
  } catch (error) {}
}

export default async function page({ params }) {
  const getData = await getPostById(params);
  const data = getData.post;
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className=' w-full mt-5 flex justify-center items-center'>
        <div className='w-9/12 h-5/6 bg-base-300 p-6 shadow-lg rounded-xl'>
          <h3 className=' text-2xl font-bold'>{data.title}</h3>
          <div className='mt-4'>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center  mt-4'>
          <div className=' w-9/12 p-6 shadow-lg bg-base-300 rounded-lg items-center'>
            <div className='flex justify-between'>
              <input type='text' placeholder='Tulis komentar mu' className='input w-11/12 ' />
              <button className='btn btn-primary'>Send</button>
            </div>
            <div className='mt-4'>
              {data.comments.map((item) => (
                <div className='p-2' key={item.id}>
                  <p className=' text-md text-accent font-bold'>{item.author.name}</p>
                  <p className=' text-sm text-white'>{item.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
