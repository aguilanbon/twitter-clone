import React from 'react'

function Modal() {
  return (
    <div className='w-modal h-100 bg-black z-50 rounded-xl'>
      <div className='flex flex-col'>

        <div className='w-full flex justify-between items-center p-3'>
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

        <div className='w-full border-b-2 border-twitterhvgray flex items-center flex-row px-4'>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="fill-twittergray h-5 r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          </div>
          <input type="text" className='w-full bg-black focus:outline-0 text-white pl-5 py-2 text-sm' placeholder='Search people'/>
        </div>

      </div>
    </div>
  )
}

export default Modal