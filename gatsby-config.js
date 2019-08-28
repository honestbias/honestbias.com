// Use dotenv to read in .env files, which become available in process.env Object
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // ie .env.development || .env.production
});

module.exports = {
  // Generic meta tag information for SEO, etc. Some of this is overwritten
  // for each page (such as the title and description).
  siteMetadata: {
    title: `HonestBias`,
    description: `We all have biases, but not everyone is honest about it. We seek truth while remaining honest about our own biases. Come join the conversation.`,
    author: `Caleb Larsen`,
    url: `https://honestbias.com`,
    siteUrl: `https://honestbias.com`,
    image: `https://honestbias.com/images/honest-bias-stove-pipe-hat-icon.png`,
    twitterUsername: `@RealHonestBias`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // Ignore all paths beginning with /ignore/
        exclude: ["/ignore/*"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `honestbias`,
        short_name: `honestbias`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon2-min.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136834298-2",
        head: true,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    // TODO: Consider enabling offline functionality (https://gatsby.dev/offline).
  ],
};
