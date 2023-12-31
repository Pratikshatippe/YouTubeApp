import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {
    const [searchParam] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div>
        <iframe 
            width="850" 
            height="400" 
            src={"https://www.youtube.com/embed/"+searchParam.get("v")}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchVideo;