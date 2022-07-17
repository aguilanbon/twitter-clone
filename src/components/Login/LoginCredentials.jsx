import React from 'react'

function LoginCredentials() {
  return (
    <div className='flex w-1/2 min-h-full flex-col items-center justify-center'>
        <div className='w-full mt-8 flex flex-col items-center'>
            <button className='bg-white w-72 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center'> <img src="./google-logo.png" alt="" className='h-4 mr-2' /> Sign up with Google</button>
            <button className='bg-white w-72 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center mt-3 font-semibold'> <img src="./apple-logo.png" alt="" className='h-4 mr-2' /> Sign up with Apple</button>
        </div>
        <div className='flex flex-row my-2 w-72 items-center justify-center'>
            <span className='w-full h-0.5 border-b border-gray-700'></span>
            <h3 className='text-white mx-1 text-xs'>or</h3>
            <span className='w-full h-0.5 border-b border-gray-700'></span>
        </div>
        <div className='w-full flex flex-col items-center'>
            <button className='bg-twitterwhite font-semibold w-72 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center'>Sign up with Phone or Email</button>
        </div>
        <div className='w-72 mt-2'>
            <p className='text-twittergray text-xxs text-'>By signing up, you agree to the <span className='text-blue-500'>Terms of Service <span className='text-twittergray'>and</span> Privacy Policy</span>, including <span className='text-blue-500'>Cookie Use.</span></p>
        </div>
        <div className='w-72 mt-9'>
            <h2 className='text-white mb-3 text-sm'>Already have an account? <a href="/" className='text-twitterblue'>Sign in</a> </h2>
        </div>
    </div>
  )
}

export default LoginCredentials