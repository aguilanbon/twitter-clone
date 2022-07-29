import React from 'react'

function HomeFooter() {
  return (
    <div className='flex flex-col xl:w-72 lg:w-60 w-auto text-twittergray mt-3 text-xxs'>
        <div className='flex flex-wrap'>
        <a href="/" className='mx-1 hover:border-b hover:border-twittergray h-4'>Terms of Service</a>
        <a href="/" className='mx-1 hover:border-b hover:border-twittergray h-4'>Privacy Policy</a>
        <a href="/" className='mx-1 hover:border-b hover:border-twittergray h-4'>Cookie Policy</a>
        <a href="/" className='mx-1 hover:border-b hover:border-twittergray h-4'>Accessibility</a>
        <a href="/" className='mx-1 hover:border-b hover:border-twittergray h-4'>Ads info</a>
        <a href="/" className='mx-1 hover:border-b hover:border-twittergray h-4'>More ...</a>
        </div>
        <p>&copy; 2022 Twitter, Inc.</p>
    </div>
  )
}

export default HomeFooter