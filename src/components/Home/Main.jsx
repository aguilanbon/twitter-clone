import React from 'react'
import Feed from './Feed/Feed'
import HomeNav from './Nav/HomeNav'
import MessagesWidget from './MessagesWidget/MessagesWidget'
import Sidebar from './Sidebar/Sidebar'

function MiddleContainer() {
  return (
    <div className='xl:w-8/12 w-full h-auto flex'>
        <div className='flex w-full static'>
          <div className='flex flex-col w-full md:w-tcard h-auto border-x border-twitterborder'>
            <HomeNav />
            <Feed />
          </div>
          <Sidebar />
          <MessagesWidget />
        </div>
    </div>
  )
}

export default MiddleContainer