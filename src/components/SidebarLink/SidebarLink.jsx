const SidebarLink = ({ title, icon, active }) => {
   return (
      <div className='relative flex items-start justify-start rounded-full px-[.5rem] py-[.6rem] cursor-pointer transition duration-300 hover:bg-[#7979793b]'>
         <div className="text-[#e7e9ea] h-[34px] w-[34px] mr-6 font-light">{icon}</div>
         <h2 className={`text-[24px] ${active ? 'font-bold' : 'font-medium'} tracking-wider text-gray-200`}>{title}</h2>
      </div>
   )
}

export default SidebarLink