import React from 'react'
import HomeNav from './HomeNav'
import TweetCard from './TweetCard'
import TweetInput from './TweetInput'

function Feed() {
  return (
    <div className='flex flex-col w-100 h-auto border-x border-twitterborder'>
        <HomeNav />
        <TweetInput />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
    </div>
  )
}

export default Feed