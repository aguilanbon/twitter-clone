import React from 'react'

function MessagesCard() {
  return (
    <div className='flex w-full'>
        <div className='w-full h-auto flex bg-black hover:bg-twitterbggray hover:bg-opacity-90 text-sm '>
            <div className='p-4 w-1/4'>
              <img src="./aloy.jpg" alt="" className='w-12 h-12 rounded-full object-cover' />
            </div>
            <div className='py-4 flex flex-col xl:w-full w-3/4'>
            <div className='flex flex-row w-full'>
                <h2 className='pr-1 text-slate-300 overflow-hidden overflow-ellipsis whitespace-nowrap xl:w-24 w-16'>Black Pantherssssssssssssss</h2>
                <h2 className='pr-2 text-twittergray overflow-hidden overflow-ellipsis whitespace-nowrap xl:w-24 w-16'>@BlackPantasssss</h2>
                <div className='pr-2 flex items-center justify-center'>
                  <div className='w-1 h-1 rounded-full bg-twittergray flex '>
                  </div>
                </div>
                <h2 className='text-twittergray xl:w-24 w-18'>Jul 24, 2022</h2>
            </div>
            <div className='flex text-twittergray'>
                <p className='overflow-hidden overflow-ellipsis whitespace-nowrap xl:w-72 w-56'>Yoooo!!! Stranger things s4 was great! no cap!sdddddddddddd</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MessagesCard