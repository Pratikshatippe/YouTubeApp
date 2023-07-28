import React from 'react'

const VideoCard = (props) => {
    const {snippet, statistics} = props.info;
    const {thumbnails, title, channelTitle} = snippet;
  return (
    <div className='m-2 p-2 w-64 shadow-lg'>
        <img className="rounded-md" alt="thumbnails" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard;