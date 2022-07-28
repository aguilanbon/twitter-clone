import React, { useContext } from 'react'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import Overlay from '../components/Home/Modal/Overlay'
import GlobalHelperContext from '../helpers/GlobalHelperContext'

function Home() {

  const {modalIsOpen} = useContext(GlobalHelperContext)

  return (
    <div className='flex flex-row w-12/12 h-auto'>
      { modalIsOpen ? <Overlay /> : '' }
      <Header />
      <Main />
    </div>
  )
}

export default Home