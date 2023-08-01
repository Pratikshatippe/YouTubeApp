import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useVideoData from '../utils/useVideoData';

const VideoContainer = () => {
    const videoData = useVideoData();

  return (
    <div className='flex flex-wrap'>
        {videoData.map(item=>(
            <Link key={item.id} to={"/watch?v="+item.id}><VideoCard info={item}/></Link>
        ))}
    </div>
  )
}

export default VideoContainer;