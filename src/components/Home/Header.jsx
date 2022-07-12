import React from 'react'
import Links from './Links'
import Avatar from './Avatar'

function Header() {
  return (
    <div className='w-4/12 h-screen sticky flex flex-col items-end text-twitterwhite pb-6'>
      <div className='w-52 h-full flex flex-col justify-evenly'>
      <Links />
      <Avatar />
      </div>
    </div>
  )
}

export default Header