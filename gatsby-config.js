/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString:
          "postgres://friday_admin:Hank55od50ts45Riday!@localhost:5432/friday",
        schema: "public",
        refetchInterval: 60, // Refetch data every 60 seconds
      },
    },
  ],
};
