import React from 'react'
import './VideoRow.css'

const VideoRow = ({views,subs,description,timestamp,channel,title,image}) => {
  return (
    <div className='videorow'>
        <img className='videorow__thumbnail' src={image} alt="" />
        <div className='videorow__text'>
            <h4>{title}</h4>
            <p className='videorow__headline'>
                {channel} • {" "}
                <span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}</span> Subscribers 
                </span> {" "}
                {views} views • {timestamp}
            </p>
            <p className='videorow__description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow