/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-50RSC8L8TB", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
  siteMetadata: {
    title: "Ruben Dougall",
    titleTemplate: "%s – Ruben Dougall",
    description: "Software Engineer. MEng Computer Science graduate (Warwick).",
    url: "https://rubendougall.co.uk", // No trailing slash allowed!
    image: "/static/ruben-*.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ruben_dougall",
  },
};
