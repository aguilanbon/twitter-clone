import React from 'react'
import LoginCredentials from '../components/Login/LoginCredentials'
import LoginHero from '../components/Login/LoginHero'
import Footer from '../components/Footer'

function Login() {
  return (
    <div className='flex min-h-screen flex-col bg-black'>
        <div className='flex h-full flex-col-reverse xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse'>
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