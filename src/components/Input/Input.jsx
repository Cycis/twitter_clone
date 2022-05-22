import { ChartBarIcon, GlobeAltIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import { CalendarIcon, EmojiHappyIcon, PhotographIcon, } from '@heroicons/react/outline'
import React from 'react'

const Input = () => {
   return (
      <div className='flex w-full items-start justify-start space-x-3 px-4 py-4 mt-2 border-b border-gray-700'>
         <img src="/jae.jpg" alt='' className='h-12 w-12 rounded-full cursor-pointer' />

         <div>
            <div className='relative'>
               <textarea placeholder="What's happening? " className='bg-transparent resize-none text-2xl tracking-wide p-3 w-[580px] h-[130px] outline-none border-b border-gray-700'></textarea>
               <span className='absolute text-md font-bold text-[#7A67FF] flex items-center space-x-2 p-2 rounded-full bottom-5 left-4 h-8 w-auto transition duration-300 hover:bg-[#826fff42] cursor-pointer'>
                  <GlobeAltIcon className='h-5' />
                  <p className='text-lg'>Everyone can reply</p>
               </span>
            </div>
            <div className='flex items-center justify-between mt-4'>
               <div className='space-x-3 flex items-center'>
                  <div className="icon rotate-90">
                     <PhotographIcon className="text-[#7A67FF] h-[22px]" />
                  </div>
                  <div className="icon rotate-90">
                     <ChartBarIcon className="text-[#7A67FF] h-[22px]" />
                  </div>

                  <div className="icon">
                     <EmojiHappyIcon className="text-[#7A67FF] h-[22px]" />
                  </div>

                  <div className="icon">
                     <CalendarIcon className="text-[#7A67FF] h-[22px]" />
                  </div>
                  <div className="icon">
                     <LocationMarkerIcon className="text-[#7A67FF] h-[22px]" />
                  </div>
               </div>
               <button className='px-6 py-2 mr-2 font-bold tracking-wide bg-[#3C3080] text-[#7F7F7F] text-lg rounded-full'>Tweet</button>
            </div>
         </div>
      </div>
   )
}

export default Input