/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jon Roberts: a Software Developer`,
    author: `Jon Roberts`,
    description:
      'This is the personal site of Jon Roberts. No, not that one - the software developer Jon Roberts.',
    siteUrl: 'https://www.jonroberts.dev',
    image: '/<JR>Logo.png',
    twitterUsername: '@the_jon_roberts',
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-netlify"]
};
