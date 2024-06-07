import React from 'react'
import { Menu } from 'lucide-react'
import { BookmarkPlus } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' h-[5rem] p-[1rem]  flex items-center justify-around bg-[#121212]'>
      <div className='flex h-full w-full text-white items-center justify-around '>
        <span className='text-[2rem] mr-[1rem] font-bold text-black bg-[#F5C518] p-[0.2rem] rounded-lg'>GoBananas</span>
        {window.innerWidth<=480?<Menu className='h-[1.8rem] w-[1.8rem]'/>:<div className='flex w-[16rem] ml-[2rem] text-[1.4rem] justify-between'>
            <div className='flex items-center hover:cursor-pointer'>
                <BookmarkPlus className='h-[1.8rem] w-[1.8rem] '/>
                <span className=' font-semibold'>watchlist</span>
            </div>
            <span className='hover:cursor-pointer font-semibold'>Sign in</span>
            <span className='hover:cursor-pointer font-semibold'>En</span>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
