import React from 'react';
import Card from './Card';

const cardData = [
  {
    title: 'hello',
  },
  {
    title: 'hi',
  },
  {
    title: 'bonjour',
  },
  {
    title: 'danke',
  },
];
export default function Content() {
  return (
    <div className='flex justify-center mt-10'>
      <div className=' w-8/12'>
        {cardData.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </div>
    </div>
  );
}
