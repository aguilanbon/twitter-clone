import React from 'react'

function HomeFooter() {
  return (
    <div className='flex flex-col w-72 text-twittergray mt-3 text-xxs'>
        <div className='flex flex-wrap'>
        <a href="/" className='mx-1'>Terms of Service</a>
        <a href="/" className='mx-1'>Privacy Policy</a>
        <a href="/" className='mx-1'>Cookie Policy</a>
        <a href="/" className='mx-1'>Accessibility</a>
        <a href="/" className='mx-1'>Ads info</a>
        <a href="/" className='mx-1'>More ...</a>
        </div>
        <p>&copy; 2022 Twitter, Inc.</p>
    </div>
  )
}

export default HomeFooter