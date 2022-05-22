import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import Trending from '../Trending/Trending'
import Who from '../Who/Who'

const Widget = () => {
   return (
      <div className="ml-8 w-[450px] py-1 space-y-5">
         <div className="sticky top-0 py-1.5 bg-black z-50 w-full">
            <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
               <SearchIcon className="text-gray-500 h-5 z-50" />
               <input
                  type="text"
                  className="bg-transparent placeholder-gray-500 pl-11 outline-none text-[#d9d9d9] rounded-full border border-transparent focus:bg-black focus:border-[#1d9bf0] absolute inset-0 w-full "
                  placeholder="Search Twitter"
               />
            </div>
         </div>

         <div className='w-full bg-[#15181c] text-[#d9d9d9] space-y-3 pt-6 rounded-2xl'>
            <h4 className='px-4 font-bold text-xl'>What's happening</h4>
            <Trending />
            <Trending />
            <Trending />
            <button className='bg-inherit pl-4 py-4 rounded-b-2xl w-full text-left font-semibold p-2 text-[#5D4BBB] hover:bg-white hover:bg-opacity-[0.02] '>Show more</button>
         </div>
         <div className='w-full bg-[#15181c] text-[#d9d9d9] space-y-3 pt-6 rounded-2xl'>
            <h4 className='px-4 font-bold text-xl'>Who to follow</h4>
            <Who />
            <Who verified />
            <button className='bg-inherit pl-4 py-4 rounded-b-2xl w-full text-left font-semibold p-2 text-[#5D4BBB] hover:bg-white hover:bg-opacity-[0.02] '>Show more</button>
         </div>
      </div>
   )
}

export default Widget