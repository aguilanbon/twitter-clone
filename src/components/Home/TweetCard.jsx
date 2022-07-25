import React, { useState } from 'react'
import TweetOptions from './TweetOptions'

function TweetCard() {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='text-twitterwhite flex flex-col border-b border-twitterborder hover:bg-twitterbggray hover:bg-opacity-30 cursor-pointer'>
      <div className='flex flex-col py-4 pl-4 pr-2 w-full'>
        <div className='flex flex-row'>
          <div className='flex'>
            <img src="./aloy.jpg" alt="" className='h-10 w-10 rounded-full object-cover' />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row'>
              <div className='flex w-full'>
                <h1 className='ml-3 text-xs lg:text-sm font-semibold hover:border-b hover:border-twitterwhite h-4'>Aloy Zero</h1>
                <h2 className='text-xs lg:text-sm mx-1 text-twittergray'>@zeroaloy</h2>
                <p className='text-xs lg:text-sm text-twittergray'>. 7h</p>
              </div>
              <div className={!isHovered ? 'flex text-white p-1' : 'flex text-twitterblue bg-twitterblue bg-opacity-10 p-1 rounded-full'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className={!isHovered ? "fill-twittergray h-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi" : "fill-twitterblue h-5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"}><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
              </div>
            </div>
            <div className='flex ml-3 flex-col text-xs lg:text-sm h-auto'>
              <p>What is the first game you ever played?</p>
              <br />
              <p>Mine was Super Mario</p>
            </div>
            <TweetOptions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetCard