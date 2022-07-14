import React from 'react'

function FollowSuggestions() {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex items-center px-4 py-2'>
                <div className='flex'>
                <img src="./aloy.jpg" alt="" className='h-10 w-10 object-cover rounded-full' />
                </div>
                <div className='flex flex-col pl-3'>
                <h2 className='text-twitterwhite text-sm font-bold'>React JS</h2>
                <h3 className='text-twittergray text-xs'>@reactjs</h3>
                </div>
            </div>
            <div className='flex pr-4 items-center justify-center'>
                <button className='bg-twitterwhite text-xs font-semibold h-7 w-16 rounded-full'>Follow</button>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='flex items-center px-4 py-2'>
                <div className='flex'>
                <img src="./aloy.jpg" alt="" className='h-10 w-10 object-cover rounded-full' />
                </div>
                <div className='flex flex-col pl-3'>
                <h2 className='text-twitterwhite text-sm font-bold'>React JS</h2>
                <h3 className='text-twittergray text-xs'>@reactjs</h3>
                </div>
            </div>
            <div className='flex pr-4 items-center justify-center'>
                <button className='bg-twitterwhite text-xs font-semibold h-7 w-16 rounded-full'>Follow</button>
            </div>
        </div>
    </div>
  )
}

export default FollowSuggestions