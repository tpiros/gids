module.exports = {
  siteMetadata: {
    title: `ChristMart`,
    description: `ChristMart - Your Favourite Online Christmas Store`,
    author: `Tamas Piros`,
    company: `Full Stack Training Ltd`,
    companyWebsite: `https://fullstacktraining.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout"),
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey:
          "NGJhMzA2MWMtNzFiNC00YzMyLTg0YmItOTQ0ZmI2ZWZhZDU3NjM3MDk3ODg0OTQxMTU3NTg1",
        js: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.css`,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
  ],
}
