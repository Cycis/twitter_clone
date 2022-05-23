import { ChatIcon, DotsHorizontalIcon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline'
import React from 'react'

const Posts = ({ image }) => {
   return (
      <div className='p-4 w-full h-auto hover:bg-white hover:bg-opacity-[0.09] border-b border-gray-700 cursor-pointer'>
         <div className='relative flex space-x-3'>
            <img src="/zoom.jpg" alt="" className='h-14 w-14 rounded-full' />
            <div>
               <div className='flex items-start justify-between'>
                  <div className='flex items-center space-x-2'>
                     <h2 className='text-xl text-[#E7E9EA] font-bold'>Maria Holmes</h2>
                     {/* verify */}
                     <p className='text-[#6E7378] text-lg'>@maria_holmes</p>
                     <span className='text-[#6E7378] text-lg'>2h</span>
                  </div>
               </div>
               <div className='mt-2'>
               // eslint-disable-next-line
                  <p className='text-xl text-[#E7E9EA]'>Wishing everyone a great Sunday 😃 <span href="#" className='text-[#7A67FF] hover:underline'>#Feed</span></p>
               </div>
            </div>
            <div className='absolute -top-2 right-0 w-10 h-10 p-2 hover:bg-cyan-900 hover:bg-opacity-[0.9] transition duration-300 rounded-full'>
               <DotsHorizontalIcon className=' text-gray-400' />
            </div>
         </div>
         {image && (
            <>
               <img src="/zoom.jpg" alt="" className='mt-6 w-[540px] ml-[60px] rounded-lg' />
            </>
         )}
         <div className=' flex items-center justify-between w-[450px] p-2 ml-[60px] mt-4'>
            <div className='flex items-center space-x-2 hover:text-cyan-700'>
               <div className='w-10 h-10 p-2 hover:bg-cyan-700 hover:bg-opacity-[0.5] transition duration-300 rounded-full'>
                  <ChatIcon className=' text-gray-400' />
               </div>
               <p>22</p>
            </div>
            <div className='flex items-center space-x-2 hover:text-green-700'>
               <div className='w-10 h-10 p-2 hover:bg-green-700 hover:bg-opacity-[0.5] transition duration-300 rounded-full'>
                  <SwitchHorizontalIcon className='text-gray-400' />
               </div>
               <p>785</p>
            </div>
            <div className='flex items-center space-x-2 hover:text-pink-700'>
               <div className='w-10 h-10 p-2 hover:bg-pink-700 hover:bg-opacity-[0.5] transition duration-300 rounded-full'>
                  <HeartIcon className='text-gray-400' />
               </div>
               <p>22</p>
            </div>
            <div className='flex items-center space-x-2 hover:text-cyan-900'>
               <div className='w-10 h-10 p-2 hover:bg-cyan-900 hover:bg-opacity-[0.5] transition duration-300 rounded-full'>
                  <UploadIcon className='text-gray-400' />
               </div>
               <p>2</p>
            </div>
         </div>
      </div>
   )
}

export default Posts