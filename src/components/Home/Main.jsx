import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'

function MiddleContainer() {
  return (
    <div className='xl:w-8/12 w-10/12 h-auto flex'>
        <div className='flex'>
          <Feed />
          <Sidebar />
        </div>
    </div>
  )
}

export default MiddleContainer