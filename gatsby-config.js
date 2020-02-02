module.exports = {
  siteMetadata: {
    title: `jon roberts: a developer.`,
    author: `@gatsbyjs`,
    description:
      'This is the personal site of Jon Roberts. No, not that one. Yeah, the developer - that Jon Roberts.',
  },
  plugins: [
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
        short_name: `thejonroberts`,
        start_url: `/`,
        background_color: `#2B59C3`,
        theme_color: `#2B59C3`,
        display: `minimal-ui`,
        icon: `src/images/<JR>Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
