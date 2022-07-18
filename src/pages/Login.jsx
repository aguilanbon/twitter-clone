import React from 'react'
import LoginCredentials from '../components/Login/LoginCredentials'
import LoginHero from '../components/Login/LoginHero'
import Footer from '../components/Footer'

function Login() {
  return (
    <div className='flex h-auto flex-col'>
      <div className='flex'>
        <LoginHero />
        <LoginCredentials />
      </div>
      <div className='flex w-full items-center justify-center'>
        <Footer />
      </div>
    </div>
  )
}

export default Login