import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import Seo from '../components/Seo';
import VideoFrame from '../components/VideoFrame';
import Link from '../components/Link';

const VideoPageStyles = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .vp-center {
    justify-content: flex-start;
  }
  .gatsby-image-wrapper {
    padding: 0;
    
  }
  .title {
justify-self: center;
margin-bottom: 2rem; 
}
.description {
  text-align: center;
  width: 30%;
  margin: 2rem;
}

a {
  margin-bottom: 2rem;
  &:hover {
    text-decoration: underline;
    color: black;
  }
}

`

const VideoPage = ({data, pageContext}) => {
    const video = data.video
    const videoId = video.externalVideo.url.slice(18)
    console.log('videodata', video)
    console.log('videoid', videoId)

  return (
    <Layout>
    <Seo title={video.externalVideo.title}/>
    <VideoPageStyles>
    <div className="title" dangerouslySetInnerHTML={{__html: video.title}}></div>
    <VideoFrame videoSrcURL={videoId} videoTitle={video.externalVideo.title}></VideoFrame>
    <div className="description" dangerouslySetInnerHTML={{__html: video.videoDetails}}></div>
    <Link className="back-link" to="">&larr; Back</Link>
    </VideoPageStyles>
    </Layout>
  )
}

export const query = graphql`
query VideoTitleQuery($videoId: String) {
  video: datoCmsVideoGridColumn(originalId: {eq: $videoId}) {
    originalId
    title
    videoSlug
    videoDetails
    columnImage {
      gatsbyImageData
    }
    externalVideo {
      title
      url
    }
  }
}`

export default VideoPage
