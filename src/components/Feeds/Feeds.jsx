import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import Posts from '../../Posts/Posts'
import Input from '../Input/Input'

const Feeds = () => {
   return (
      <div className="flex-grow border-l border-r border-gray-700 max-w-2xl ml-[370px]">
         <div className='w-full flex items-center justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700'>
            <h2 className='text-xl font-bold'>Home</h2>
            <div className='hoverAnimation flex items-center justify-center ml-auto'>
               <SparklesIcon className='h-5 text-white' />
            </div>
         </div>

         <Input />
         <Posts />
         <Posts image />
         <Posts />
         <Posts image />
      </div>

   )
}

export default Feeds


// relative flex - grow border - x - [1px] border - [#2F3336] pt - 4