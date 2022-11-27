import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import Section from '../components/Section';
import VideoFrame from '../components/VideoFrame';

const VideoPageStyles = styled.div`
  padding: 1rem;
  .gatsby-image-wrapper {
    padding: 0;
  }
  .video {
    justify-content: left !important;
  }
`

const VideoPage = ({data, pageContext}) => {
    const video = data.video
    const videoId = video.externalVideo.url.slice(18)
    console.log('videodata', video)
    console.log('videoid', videoId)

  return (
    <Layout>
    <VideoPageStyles>
    <h1 dangerouslySetInnerHTML={{__html: video.text}}></h1>
    
    <VideoFrame videoSrcURL={videoId} videoTitle={video.externalVideo.title}></VideoFrame>
    </VideoPageStyles>
    </Layout>
  )
}

// export const query = graphql`
//     query PageQuery($pageId: String!) {
//          page: datoCmsPage(originalId: {eq: $pageId}) {
//     title
//     slug
//     sections {
//       gridColumns {
//         text
//         originalId
//         columnImage {
//           gatsbyImageData(placeholder: BLURRED)
//         }
//       }
//     }
// }
// }`

export const query = graphql`
query VideoTitleQuery($videoId: String) {
  video: datoCmsVideoGridColumn(originalId: {eq: $videoId}) {
    originalId
    text
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
