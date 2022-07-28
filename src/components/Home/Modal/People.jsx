import React, { useState } from 'react'

function People() {

    const [active, setIsActive] = useState(false)

  return (
    <div className='flex flex-col py-3 pl-1 hover:bg-twitterbggray hover:bg-opacity-70 cursor-pointer' onClick={() => setIsActive(prev => !prev)}>
        <div className='flex flex-row items-center'>
            <div className='w-12 flex justify-end'>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="fill-twittergray h-3 r-1bwzh9t r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g></svg>
            </div>
            <h3 className='text-gray-500 text-xs font-semibold pl-3'>Following</h3>
        </div>
        <div className='flex flex-row'>
            <div className='w-12'>
                <img src="./aloy.jpg" alt="" className='w-9 h-9 object-cover rounded-full ml-3 mt-1' />
            </div>
            <div className='w-full flex flex-row justify-between pl-4 leading-none'>
                <div className='flex flex-col'>
                    <h1 className='text-twitterwhite text-sm font-semibold '>Elon Muskn't</h1>
                <h2 className='text-gray-500 text-sm leading-none'>@ElonMusknt420</h2>
                </div>
                <div className='pr-4'>
                    {active ? <svg viewBox="0 0 24 24" aria-hidden="true" class="fill-twitterblue h-4 r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path></g></svg> : ''}
                </div>
            </div>
        </div>
    </div>
  )
}

export default People