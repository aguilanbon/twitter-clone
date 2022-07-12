import React from 'react'
import HomeNav from './HomeNav'
import TweetCard from './TweetCard'
import TweetInput from './TweetInput'

function Feed() {
  return (
    <div className='flex flex-col w-100 border-x border-twitterborder'>
        <HomeNav />
        <TweetInput />
        <TweetCard />
    </div>
  )
}

export default Feed