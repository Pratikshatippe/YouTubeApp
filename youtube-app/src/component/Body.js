import React from 'react'
import Sidepanel from './Sidepanel'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
    const menuStatus = useSelector(store=>store.app.isMenuOpen);
    console.log(menuStatus)
  return (
    <div className='grid grid-flow-col'>
        {menuStatus && <Sidepanel className="col-span-1"/>}
        <Outlet className="col-span-11"/>
    </div>
  )
}

export default Body;