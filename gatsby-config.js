module.exports = {
  siteMetadata: {
    title: 'Ruben Dougall',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-23280894-7",
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
