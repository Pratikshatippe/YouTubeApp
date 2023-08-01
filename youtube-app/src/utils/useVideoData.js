import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from './constant';

const useVideoData = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() =>{
        const mainData = await fetch(YOUTUBE_VIDEO_API);
        const videoContent = await mainData.json();
        setVideoData(videoContent.items);
    }
  return videoData;
}

export default useVideoData;