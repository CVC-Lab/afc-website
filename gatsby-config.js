/**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  pathPrefix: "/afc-website",
  siteMetadata: {
    menuLinks:[
      {
        name:'On the Fly Sampling',
        link:'/sampling',
      },
      {
        name:'Camera ISP Code & Paper',
        link:'/camera-isp',
      },
      {
        name:'Signature Detection & Classification',
        link:'/signature-detection',
      },
      {
        name:'Integration of IR/EO Video Streams',
        link:'/integration',
      },
      {
        name:'Novel Event Signature Detection',
        link:'/event-signature',
      },
      {
        name:'Real Time Localization',
        link:'/localization',
      }
    ],
    title: `afc-website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              className: `custom-class`,
              icon: false,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: false,
              elements: [`h1`, `h2`, `h3`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              path: `${__dirname}/src/images/`,
            },
          },
          'gatsby-remark-static-images',
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Uncomment the following line to enable PWA + Offline functionality
    // `gatsby-plugin-offline`,
  ],
}