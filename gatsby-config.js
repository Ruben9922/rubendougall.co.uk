/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-use-dark-mode`,
  ],
  siteMetadata: {
    title: "Ruben Dougall",
    titleTemplate: "%s – Ruben Dougall",
    description:
      ".NET Developer. Computer Science graduate from University of Warwick.",
    url: "https://rubendougall.co.uk", // No trailing slash allowed!
    image: "/static/ruben-532b64d7c591a5910531799fc8bc1a04.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ruben_dougall",
  },
};
