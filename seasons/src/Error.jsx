import './Error.css'
import React from 'react'

const Error = (props) => {
  return (
    <div>
      <div className='main-icon'>
        <i className=' massive exclamation triangle icon' />
        <h1 className='text'>Error: {props.message}</h1>
      </div>
    </div>
  )
}

export default Error
