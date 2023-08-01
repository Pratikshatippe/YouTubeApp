import React from 'react'
import { Link } from 'react-router-dom';

const Sidepanel = () => {
  return (
    <div className='h-96 border border-gray-200 shadow-lg'>
        <div className='h-10 mt-6'><Link to="/">Home</Link></div>
        <div className='h-10'>Shots</div>
        <div className='h-10'>Subscription</div>
        <hr></hr>
        <div className='h-10 mt-4'>Library</div>
        <div className='h-10'>History</div>
        <div className='h-10'>Your Video</div>
    </div>
  )
}

export default Sidepanel;