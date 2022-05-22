import { BadgeCheckIcon } from '@heroicons/react/outline'
import React from 'react'

const Who = ({ verified }) => {
   return (
      <div className='py-2 flex items-start justify-center cursor-pointer'>
         <div className='flex items-center justify-between space-y-[.2px] px-4 py-2 hover:bg-white hover:bg-opacity-[0.02] w-full'>
            <div className='flex space-x-4'>
               <img src="/zoom.jpg" alt="" className='h-14 w-14 rounded-full' />
               <div>
                  {
                     verified ? (
                        <>
                           <div className='flex items-center space-x-2'>
                              <h4 className='text-[#686D72]'>Maria Holmes</h4>
                              <BadgeCheckIcon className='h-6 text-green-600' />
                           </div>
                           <p className='text-lg font-bold'>@maria_holmes</p>
                        </>
                     ) : (
                        <>
                           <h4 className='text-[#686D72]'>Maria Holmes</h4>
                           <p className='text-lg font-bold'>@maria_holmes</p>
                        </>
                     )
                  }

               </div>
            </div>
            <div className='text-center w-auto text-black font-bold tracking-wide bg-[#fff] px-6 py-2 rounded-full'>Follow</div>
         </div>
      </div>
   )
}

export default Who