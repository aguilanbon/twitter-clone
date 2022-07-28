import React from 'react'

function Modal() {
  return (
    <div className='w-modal h-100 bg-black z-50 rounded-xl'>
      <div className='flex flex-col p-3'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex flex-row items-center'>
            <div className='flex items-center p-1 hover:bg-twittergray hover:bg-opacity-30 rounded-full cursor-pointer'>
              <svg viewBox="0 0 24 24" aria-hidden="true" class="fill-twitterwhite h-5 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{color: 'rgb(239, 243, 244)'}}><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
            </div>
            <h1 className='text-twitterwhite font-bold ml-7'>New Message</h1>
          </div>
          <div className='flex pr-1'>
            <button className='flex items-center bg-gray-500 text-twitterbggray text-sm font-semibold py-1 px-4 rounded-full'>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal