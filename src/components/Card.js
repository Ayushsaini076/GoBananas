import React, { useState } from 'react'
import { X } from 'lucide-react';

const Card = ({title,url,desc,date}) => {
  return (
    <>
    {window.innerWidth<=720?<div  className='w-[70%] relative h-[25%]  border-[0.2rem] text-white border-gray-300 p-[1rem] rounded-lg mb-[3rem]'>
      <img className='mr-[2rem] h-full w-full' src={`https://media.themoviedb.org/t/p/w220_and_h330_face${url}`} alt="" />
      <div>
        <h2 className='text-[2rem] font-bold'>{title}</h2>
        <p className='text-[1.2rem] xl:text-[1.4rem] mt-[1rem] mb-[1.2rem]'>{desc}</p>
        <p className='absolute bottom-[1rem] text-[1rem] xl:text-[1.2rem] font-bold'>{date}</p>
      </div>
    </div>:<div  className='w-[70%] relative h-[25%] flex border-[0.2rem] text-white border-gray-300 p-[1rem] rounded-lg mb-[3rem]'>
      <img className='mr-[2rem] h-full' src={`https://media.themoviedb.org/t/p/w220_and_h330_face${url}`} alt="" />
      <div>
        <h2 className='text-[2rem] font-bold'>{title}</h2>
        <p className='text-[1.2rem] xl:text-[1.4rem] mt-[1rem] mb-[1.2rem]'>{desc}</p>
        <p className='absolute bottom-[1rem] text-[1rem] xl:text-[1.2rem] font-bold'>{date}</p>
      </div>
    </div>}
    </>
    
  )
}

export default Card
