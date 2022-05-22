import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'

const Trending = () => {
   return (
      <div className='py-2 flex items-start justify-center cursor-pointer'>
         <div className='flex justify-between space-y-1 px-4 py-2 hover:bg-white hover:bg-opacity-[0.02] w-full'>
            <div>
               <h4 className='text-[#686D72]'>Roman Reigns . Trending</h4>
               <h2 className='text-lg font-bold'>Roman Reigns</h2>
               <p className='text-[#686D72]'>2201 Tweets</p>
            </div>
            <DotsHorizontalIcon className='h-6 mr-4 text-gray-600' />
         </div>
      </div>
   )
}

export default Trending