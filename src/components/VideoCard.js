import React from 'react'
import { Avatar } from '@mui/material';
import './VideoCard.css'
const VideoCard = ({image,title,channel,views,timestamp,channelImage}) => {
  return (
    <div className='videoCard'>
        <img className='videoCard_thumbnail' src={image} alt="" />
        <div className='videoCard__info'>
            <Avatar className='videoCard_avatar' src={channelImage} alt={channel}/>
            <div className='videoCard__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard