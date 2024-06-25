/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jon Roberts: a Software Developer`,
    author: `Jon Roberts`,
    description:
      'This is the personal site of Jon Roberts. No, not that one. Yeah, the software developer - that Jon Roberts.',
    siteUrl: 'https://www.jonroberts.dev',
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-netlify"]
};
