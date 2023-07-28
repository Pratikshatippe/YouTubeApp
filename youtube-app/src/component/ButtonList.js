import React from 'react'

const ButtonList = () => {
  return (
    <div className='flex'>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>All</button>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>Mixes</button>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>Movie</button>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>Song</button>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>cartoon</button>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>live</button>
       <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 py-1 px-4 border border-gray-400 rounded-md'>Short Film</button>
    </div>
  )
}

export default ButtonList;