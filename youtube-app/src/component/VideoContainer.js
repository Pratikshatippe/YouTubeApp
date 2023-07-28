import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    console.log(YOUTUBE_VIDEO_API);
    const fetchData = async() =>{
        const mainData = await fetch(YOUTUBE_VIDEO_API);
        const videoContent = await mainData.json();
        setVideoData(videoContent.items);
    }
    console.log(videoData);
  return (
    <div className='flex flex-wrap'>
        {videoData.map(item=>(
            <VideoCard key={item.contentDetails.id} info={item}/>
        ))}
    </div>
  )
}

export default VideoContainer;