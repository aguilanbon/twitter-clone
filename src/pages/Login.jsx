import React from 'react'
import LoginCredentials from '../components/Login/LoginCredentials'
import LoginHero from '../components/Login/LoginHero'
import Footer from '../components/Footer'

function Login() {
  return (
    <div className='flex min-h-screen flex-col bg-twitterhvgray'>
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