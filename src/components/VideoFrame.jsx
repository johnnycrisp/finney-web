import React from "react"


const VideoFrame = ({ videoSrcURL, videoTitle, ...props }) => (

    <iframe
      src={`https://player.vimeo.com/video/${videoSrcURL}`}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      frameBorder="0"
      height="600"
      width="100%"
    />

)
export default VideoFrame