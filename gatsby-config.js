module.exports = {
  siteMetadata: {
    title: `jon roberts: a developer.`,
    author: `Jon Roberts`,
    description:
      'This is the personal site of Jon Roberts. No, not that one. Yeah, the software developer - that Jon Roberts.',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jon Roberts: the developer: a site`,
        short_name: `jonroberts`,
        start_url: `/`,
        background_color: `#2B59C3`,
        theme_color: `#2B59C3`,
        display: `minimal-ui`,
        icon: `src/images/<JR>Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        // mergeSecurityHeaders: true, // boolean to turn off the default security headers
        // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        // mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
