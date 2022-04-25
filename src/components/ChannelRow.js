import React from 'react'
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import './ChannelRow.css'

const ChannelRow = ({image,channel,subs,noOfVideos,
description,verified}) => {
  return (
    <div className='channelrow'>
        <Avatar className='channelrow__avatar' src={image} alt={channel}/>
        <div className='channelrow__text'>
            <h4>{channel} {verified && <VerifiedIcon/>}</h4>
            <p>{subs} subscribers . {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow