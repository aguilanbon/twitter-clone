import React, { useState } from 'react'

function MessagesWidget() {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`fixed bg-black lg:w-96 w-64 ${isExpanded ? `h-96 ` : `h-12 items-center`}  bottom-0 right-5 px-3 pt-2 rounded-t-lg shadow-twitter shadow-white flex cursor-pointer flex-col  transition-all`} onClick={() => setIsExpanded(prev => !prev)}>
        <div className='flex flex-row h-12 w-full justify-between'>
          <h1 className='font-bold text-twitterwhite text-lg'>Messages</h1>
          <div className='flex h-9'>
            <div className='hover:bg-twitterbggray hover:bg-opacity-80 p-2 rounded-full'>
              <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-twitterwhite h-5 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 `} style={{color: 'rgb(239, 243, 244)'}}><g><path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path></g></svg>
            </div>
            {!isExpanded ? 
              <div className='hover:bg-twitterbggray hover:bg-opacity-80 p-2 rounded-full' onClick={() => setIsExpanded(false)}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-white h-5 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{color: 'rgb(239, 243, 244)'}}><g><path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path><path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path></g></svg>
              </div>
              :
              <div className='hover:bg-twitterbggray hover:bg-opacity-80 p-2 rounded-full' onClick={() => setIsExpanded(true)}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-white h-5 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{color: 'rgb(239, 243, 244)'}}><g><path d="M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z"></path><path d="M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z"></path></g></svg>
              </div>
            }
          </div>
        </div>
    </div>
  )
}

export default MessagesWidget