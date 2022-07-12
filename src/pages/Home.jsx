import React from 'react'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'

function Home() {
  return (
    <div className='flex flex-row w-full h-auto'>
      <Header />
      <Main />
    </div>
  )
}

export default Home