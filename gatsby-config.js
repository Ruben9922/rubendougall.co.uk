/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import profileImage from "./src/images/ruben.jpg";

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-23280894-7",
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
  siteMetadata: {
    title: "Ruben Dougall",
    titleTemplate: "%s – Ruben Dougall",
    description: "Software Engineer. MEng Computer Science graduate (Warwick).",
    url: "https://rubendougall.co.uk", // No trailing slash allowed!
    image: profileImage, // Path to your image you placed in the 'static' folder
    twitterUsername: "@ruben_dougall",
  },
};
