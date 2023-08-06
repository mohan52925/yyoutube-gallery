import React from 'react'
import "./project1.css"

function VideoCard(props) {
  console.log(props)
  return (
    <div className='Div-card'>
      <video poster={props.Videos.thumbnailUrl}><source src=".movie.mp4"type="video/mp4"/></video>
      <div className='main-tag'>
      <img src={props.Videos.channelLogoUrl}/>
      <div className='detail-tag'>
      <h3 className='title'>{props.Videos.title}</h3>
      <a class="channelname" spellcheck="false" href="/@MrBeast" dir="auto">{props.Videos.channelName}</a>
      <span>{props.Videos.views}views</span><span id='Likes'>{props.Videos.likes}</span>
      </div>
      </div>
    </div>
  )
}

export default VideoCard;