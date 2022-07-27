import React, { useState } from 'react'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import Overlay from '../components/Home/Modal/Overlay'

function Home() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='flex flex-row w-12/12 h-auto'>
      <Overlay />
      <Header />
      <Main />
    </div>
  )
}

export default Home