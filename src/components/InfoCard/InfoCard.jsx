import { DotsHorizontalIcon } from '@heroicons/react/outline';

const InfoCard = () => {
   return (
      <div className='relative -bottom-28 flex items-center p-4 h-[80px] w-[280px] rounded-full hover:bg-[#7979793b] transition duration-500 cursor-pointer'>
         <img src="/jae.jpg" alt='' className='object-cover h-[50px] w-[50px] rounded-full mr-2' />
         <div className='mr-6'>
            <h1 className='text-lg  text-[#f1f1f1] font-bold tracking-wide'>codingJustice</h1>
            <p className='text-[#5E6266] tracking-wide'>@1justicejoshua1</p>
         </div>
         <DotsHorizontalIcon className='h-6 text-white' />
      </div>
   )
}

export default InfoCard