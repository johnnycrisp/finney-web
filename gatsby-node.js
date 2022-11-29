/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`)


// import path from 'path'

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//   {
//   allDatoCmsPage {
//     nodes {
//       title
//       slug
//       originalId
//     }
//   }
// }

// `);

// console.log(result);

// result.data.allDatoCmsPage.nodes.forEach(page => {
//   createPage({
//      path: `/${page.slug === "index" ? "" : page.slug}`,
//     component: require.resolve("./src/templates/generic-page.jsx"),
//     context: {
//       pageId: page.originalId,
//     },
//   })
// })

// }



async function turnPagesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const pageTemplate = path.resolve('./src/templates/generic-page.jsx');
  // 2. Query all pages
  const { data } = await graphql(`
    query {
  pages: allDatoCmsPage {
    nodes {
      title
      slug
      originalId
    }
  }
}
  `);
  // 3. Loop over each page and create a page

  data.pages.nodes.forEach((page) => {
    actions.createPage({
      // The url for the new page
      path: `/${page.slug}`,
      component: pageTemplate,
      context: {
        slug: page.slug,
        pageId: page.originalId,
      },
    });
  });
}


async function turnVideosIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const videoTemplate = path.resolve('./src/templates/video.jsx');
  // 2. Query all videos
  const { data } = await graphql(`
    query {
  videos: allDatoCmsVideoGridColumn {
    nodes {
      originalId
      title
      videoSlug
      videoDetails
      columnImage {
        gatsbyImageData
      }
      externalVideo {
        url
        title
      }
    }
  }
}
  `);
  // 3. Loop over each video and create a page for that video

  data.videos.nodes.forEach((video) => {
    actions.createPage({
      // The url for the new page
      path: `/${video.videoSlug}`,
      component: videoTemplate,
      context: {
        slug: video.videoSlug,
        videoId: video.originalId,
      },
    });
  });
}

exports.createPages = async function (params) {
  // Create pages dynamically
  //   Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnVideosIntoPages(params),
    turnPagesIntoPages(params),

  ]);
  
}