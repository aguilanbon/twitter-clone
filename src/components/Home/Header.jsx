import React from 'react'
import Links from './Links'
import Avatar from './Avatar'

function Header() {
  return (
    <div className='w-4/12 h-screen flex flex-col items-end text-twitterwhite'>
      <div className='w-52 h-full flex flex-col justify-evenly fixed pb-6'>
      <Links />
      <Avatar />
      </div>
    </div>
  )
}

export default Header