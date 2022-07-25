import React from 'react'

function TrendCard() {
  return (
    <div className='w-full  flex py-2 justify-between px-2 cursor-pointer bg-twitterbggray hover:bg-twitterhvgray'>
        <div className='flex flex-col pl-2'>
            <p className='text-twittergray text-xs'>Trending in Philippines</p>
            <h2 className='text-twitterwhite font-bold text-sm'>Department of Health</h2>
            <p className='text-twittergray text-xs'>3,491 Tweets</p>
        </div>
        <div className='flex pr-2'>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 fill-twitterwhite r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
        </div>
    </div>
  )
}

export default TrendCard