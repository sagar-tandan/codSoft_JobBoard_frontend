import React from 'react'
import loader from '../assets/Asset!/loader.gif'

export default function Start() {
  return (
    <div className='mt-16 w-full h-[100vh] flex items-center justify-center'>
        <img className='w-20 h-20' src={loader} alt="" />
    </div>
  )
}
