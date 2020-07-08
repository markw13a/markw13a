module.exports = {
  siteMetadata: {
    title: `Mark Wood`,
    description: `Mark Wood -- Glasgow based web-developer`,
    author: `markw13a@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },   
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ],
}
