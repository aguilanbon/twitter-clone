import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'

function MiddleContainer() {
  return (
    <div className='xl:w-8/12 w-full h-auto flex'>
        <div className='flex w-full'>
          <Feed />
          <Sidebar />
        </div>
    </div>
  )
}

export default MiddleContainer