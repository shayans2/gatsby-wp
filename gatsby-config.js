require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "An awesome Gatsby-Wordpress boilerplate.",
    author: "Shayan Bemanian",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WORDPRESS_GQL_URL}/graphql`,
        // Uncomment this if needed
        // schema: {
        //   requestConcurrency: 5,
        //   previewRequestConcurrency: 2,
        // },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/dist/images/`,
      },
      __key: "images",
    },
  ],
};
