import React from 'react'

function Avatar() {
  return (
    <div className='mr-4 w-full full hover:bg-twitterbggray hover:bg-opacity-60 py-2 px-2 rounded-full cursor-pointer'>
        <div className='flex justify-between items-center '>
          <div className='flex'>
            <div className='flex mr-2 items-center'>
            <img src="./aloy.jpg" alt="" className='w-8 h-8 rounded-full object-cover' />
          </div>
          <div className='flex flex-col justify-center'>
            <h1 className='text-sm font-semibold leading-3'>Aloy Zero</h1>
            <h2 className='text-sm font semibold text-twittergray'>@zeroaloy</h2>
          </div>
          </div>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="fill-twitterwhite w-5 r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
          </div>
        </div>
    </div>
  )
}

export default Avatar