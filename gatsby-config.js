module.exports = {
  siteMetadata: {
    companyName: "knit",
    contactFormEndpoint: "https://formcarry.com/s/11PY44aSiKo",
    projectFormEndpoint: "https://formcarry.com/s/11PY44aSiKo",
    email: "team@knit.dev",
    linkedIn: "https://www.linkedin.com/company/knit-llc",
    githubSource: "https://github.com/jwtong/company-site"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans", "Ubuntu"]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // disableAutoprefixing: true,
        // disableMinification: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Knit LLC",
        short_name: "Knit LLC",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#E91E63",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    },
    "gatsby-plugin-offline"
  ]
};
