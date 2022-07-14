import React from 'react'

function Sidebar() {
  return (
    <div className='w-auto h-auto flex flex-col pl-4 mr-10'>
      <div className='h-12 flex fixed items-center bg-black top-0'>
        <input type="text" className='h-8 pl-10 py-1 rounded-full bg-twitterbggray w-64 text-twitterwhite outline-none border-1 text-xs focus:outline-twitterblue focus:border-0' />
        <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-twittergray absolute ml-2 h-4 pl-1 r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      </div>
      <div className='w-64 h-auto flex flex-col mt-14 pl-2 bg-twitterbggray rounded-t-md justify-between'>
        <h1 className='text-twitterwhite font-bold py-2 px-2'>Trends for you</h1>
        <div className='w-full h-14 flex py-2 mb-2 justify-between px-2'>
          <div className='flex flex-col'>
            <p className='text-twittergray text-xxs'>Trending in Philippines</p>
            <h2 className='text-twitterwhite font-bold text-xs'>Department of Health</h2>
            <p className='text-twittergray text-xxs'>3,491 Tweets</p>
          </div>
          <div className='flex pr-2'>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 fill-twitterwhite r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
          </div>
        </div>
      </div>
      <div className='flex bg-twitterbggray rounded-b-md p-4'>
        <a href="/" className='text-twitterblue text-xs'>Show more</a>
      </div>
    </div>
  )
}

export default Sidebar