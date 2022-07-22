import React from 'react'
import Feed from './Feed'
import MessagesWidget from './MessagesWidget'
import Sidebar from './Sidebar'

function MiddleContainer() {
  return (
    <div className='xl:w-8/12 w-full h-auto flex'>
        <div className='flex w-full static'>
          <Feed />
          <Sidebar />
          <MessagesWidget />
        </div>
    </div>
  )
}

export default MiddleContainer