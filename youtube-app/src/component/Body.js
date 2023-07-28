import React from 'react'
import Sidepanel from './Sidepanel'
import MainContainer from './MainContainer'

const Body = (props) => {
  return (
    <div className='grid grid-flow-col'>
        {!props.isStatus && <Sidepanel className="col-span-1"/>}
        <MainContainer className="col-span-11" />
    </div>
  )
}

export default Body;