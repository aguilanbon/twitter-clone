import React from 'react'
import Modal from './Modal'

function Overlay() {
  return (
    <div className='w-full min-h-screen bg-slate-500 bg-opacity-40 fixed z-40 flex items-center justify-center'>
      <Modal />
    </div>
  )
}

export default Overlay