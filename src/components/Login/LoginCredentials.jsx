import React from 'react'

function LoginCredentials() {
  return (
    <div className='flex lg:w-auto sm:w-full h-full lg:pl-8 sm:pl-0 sm:items-center flex-col'>
        <div className='flex flex-col sm:w-96'>
            <div className='w-full flex lg:mt-32 sm:mt-10'>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 fill-white r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </div>
        <div className='w-full mt-12'>
            <h1 className='text-white text-6xl font-bold'>Happening now</h1>
        </div>
        <div className='mt-12'>
            <h2 className='text-white text-3xl font-bold'>Join Twitter today.</h2>
        </div>
        <div className='w-full mt-8 flex flex-col'>
            <button className='bg-white w-60 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center'> <img src="./google-logo.png" alt="" className='h-4 mr-2' /> Sign up with Google</button>
            <button className='bg-white w-60 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center mt-3'> <img src="./apple-logo.png" alt="" className='h-4 mr-2' /> Sign up with Apple</button>
        </div>
        <div className='flex flex-row my-2 w-60 items-center justify-center'>
            <span className='w-full h-0.5 bg-slate-800'></span>
            <h3 className='text-white mx-3 text-xs'>or</h3>
            <span className='w-full h-0.5 bg-slate-800'></span>
        </div>
        <div className='w-full flex flex-col'>
            <button className='bg-twitterblue text-white font-semibold w-60 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center'>Sign up with Phone or Email</button>
        </div>
        <div className='w-60 mt-2'>
            <p className='text-twittergray text-xxxs text-'>By signing up, you agree to the <span className='text-blue-500'>Terms of Service <span className='text-twittergray'>and</span> Privacy Policy</span>, including <span className='text-blue-500'>Cookie Use.</span></p>
        </div>
        <div className='w-60 mt-9'>
            <h2 className='text-white font-semibold mb-3 text-sm'>Already have an account?</h2>
            <button className='text-twitterblue border border-twittergray font-semibold w-60 text-xs p-2 rounded-full cursor-pointer flex items-center justify-center'>Sign in</button>
        </div>
        </div>
    </div>
  )
}

export default LoginCredentials