import React from 'react'

export default function Card({title}) {
  return (
    <div className='p-4 bg-neutral shadow-lg rounded-lg mb-5'>
        <h2 className='text-2xl'>{title}</h2>
    </div>
  )
}
