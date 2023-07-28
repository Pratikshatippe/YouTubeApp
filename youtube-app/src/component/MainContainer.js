import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = (props) => {
  return (
    <div className={props.className}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer;