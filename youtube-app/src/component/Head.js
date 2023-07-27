import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col shadow-lg'>
        <div className='flex col-span-1 p-2'>
            <img className="h-8" alt="dashboard" src="https://static.thenounproject.com/png/2437562-200.png"/>
            <img className="h-10" alt="logo" src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"/>
        </div>
        <div className='col-span-8 p-2'>
            <input className="w-1/2 border border-gray-400 rounded-l-full" type="text"></input>
            <button className='border border-gray-400 rounded-r-full'>Search</button>
        </div>
        <div className='col-span-1 p-2'>

        </div>
    </div>
  )
}

export default Head;