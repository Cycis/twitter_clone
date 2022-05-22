import { StarIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'

const Header = () => {
   return (
      <div className='sticky top-0 z-10 flex bg-transparent w-full'>
         <div className='w-[780px] flex items-center justify-between px-6 py-0 border-r-[.2px] border-[#202327]'>
            <h1 className='text-xl tracking-wide font-bold'>Home</h1>
            <StarIcon className='w-8' />
         </div>
         <div className=' relative p-4 pt-2 w-[450px]'>
            <input type="text" className='text-[#676C71] text-lg h-[60px] pl-[5rem] bg-[#202327] w-full rounded-full outline-none' placeholder='Search Twitter' />
            <SearchIcon className='absolute w-6 h-6 text-[#676C71] top-[32px] left-8' />
         </div>
      </div>
   )
}

export default Header