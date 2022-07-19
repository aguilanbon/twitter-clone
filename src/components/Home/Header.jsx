import React from 'react'
import Links from './Links'
import Avatar from './Avatar'

function Header() {
  return (
    <div className='w-3/12 lg:w-4/12 h-screen flex flex-col items-end text-twitterwhite'>
      <div className='lg:w-52 w-auto h-full flex flex-col justify-evenly lg:items-end fixed pb-6'>
      <Links />
      <Avatar />
      </div>
    </div>
  )
}

export default Header