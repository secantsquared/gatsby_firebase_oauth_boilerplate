const cred = require('./cred.js')
module.exports = {
  siteMetadata: {
    title: 'Gatsby starter Firebase'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-firebase',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffb200',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-layout',
    // 'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-firebase-firestore`,
      options: {
        // pass you Firebase credentials in here.
        credential: cred,
        databaseURL: 'https://doormangats.firebaseio.com',
        types: [
          {
            // The TypeName - Will become `FirebaseLike` in Gatsby
            // *required*
            type: 'User',
            // The path to the resource in your Firestore database
            // *required*
            path: 'users',
            // Any additional Firestore queries
            // Default: (ref) => ref
            query: ref => ref.limit(50),
            // Use the map function to transform your nodes however you like.
            // Default: (node) => node
            map: node => {
              node.id = `user-${node.id}`
              return node
            }
          }
        ]
      }
    }
  ]
}
