import React from 'react'
import error from './../../assets/error.svg'



export default function NotFound() {
  return <>
    <div className='container d-flex justify-content-center align-items-center'>
        <img src={error} alt="error Image" className='w-50' />
    </div>
  </>
}