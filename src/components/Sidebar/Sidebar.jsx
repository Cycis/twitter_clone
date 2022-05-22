import React from 'react'
import SidebarLink from '../SidebarLink/SidebarLink'

import { HomeIcon } from '@heroicons/react/solid'
import { HashtagIcon, MailIcon, BellIcon, UserIcon, DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import TweetButton from '../tweetButton/TweetButton'
import InfoCard from '../InfoCard/InfoCard'

const Sidebar = () => {
   return (
      <div className="fixed w-[300px] flex flex-col items-start pr-20 pt-4">
         <div className="rounded-full pl-2 mb-2">
            <img src="./twitter-logo.svg" alt="" className="object-fit w-10" />
         </div>
         <div className="mt-4 space-y-2 flex flex-col">
            <SidebarLink title='Home' icon={<HomeIcon />} active />
            <SidebarLink title='Explore' icon={<HashtagIcon />} />
            <SidebarLink title='Notification' icon={<BellIcon />} />
            <SidebarLink title='Messages' icon={<MailIcon />} />
            <SidebarLink title='Profile' icon={<UserIcon />} />
            <SidebarLink title='More' icon={<DotsCircleHorizontalIcon />} />
         </div>
         <TweetButton tweet />
         <InfoCard />
      </div>
   )
}

export default Sidebar