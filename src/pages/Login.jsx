import React from 'react'
import LoginCredentials from '../components/Login/LoginCredentials'
import LoginHero from '../components/Login/LoginHero'

function Login() {
  return (
    <div className='flex h-full'>
        <LoginHero />
        <LoginCredentials />
    </div>
  )
}

export default Login