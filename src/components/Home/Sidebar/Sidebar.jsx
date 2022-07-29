import React, { useContext } from 'react'
import GlobalHelperContext from '../../../helpers/GlobalHelperContext'
import FollowSuggestions from './FollowSuggestions'
import HomeFooter from './HomeFooter'
import ShowMore from './ShowMore'
import TrendCard from './TrendCard'

function Sidebar() {
  const {inputState, setInputState} = useContext(GlobalHelperContext)

  return (
    <div className='hidden lg:w-auto lg:h-auto lg:flex lg:flex-col lg:pl-6 lg:mr-10 lg:mb-28'>
      <div className='h-12 flex fixed items-center bg-black top-0'>
        <input type="text" className='h-10 pl-12 mt-1 rounded-full bg-twitterbggray xl:w-80 lg:w-72 w-auto text-twitterwhite outline-none border-1 text-sm focus:outline-twitterblue focus:border-0' onClick={() => setInputState(true)} placeholder="Search Twitter" />
        <svg viewBox="0 0 24 24" aria-hidden="true" className={!inputState ? "fill-twittergray absolute ml-2 h-5 pl-1 r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr" : "fill-twitterblue absolute ml-2 h-5 pl-1 r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"}><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      </div>
      <div className='flex flex-col h-72 mt-1'>
        <div className='xl:w-80 lg:w-72 w-auto h-auto flex flex-col mt-14 bg-twitterbggray rounded-t-xl justify-between'>
        <h1 className='text-twitterwhite font-bold py-2 px-2 pl-4'>Trends for you</h1>
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
      <ShowMore />
      <div className='mt-2 bg-twitterbggray rounded-xl'>
        <h1 className='text-twitterwhite px-4 py-2 font-bold' >Who to follow</h1>
        <FollowSuggestions />
        <ShowMore />
      </div>
      <HomeFooter />
      </div>
    </div>
  )
}

export default Sidebar