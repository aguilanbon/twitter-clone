import React from 'react'
import Links from './Links'
import Avatar from './Avatar'

function Header() {
  return (
    <div className='w-2/12 xl:w-4/12 md:w-1/4 h-screen flex flex-col items-end text-twitterwhite lg:pr-4'>
      <div className='lg:w-56 w-auto h-full flex flex-col justify-evenly fixed pb-6'>
      <Links />
      <Avatar />
      </div>
    </div>
  )
}

export default Header