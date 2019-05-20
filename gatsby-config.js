module.exports = {
  siteMetadata: {
    title: "dehne",
    author: "rayday",
    description: "a website based on Stellar by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
      
        resolve: `gatsby-source-meetup`,
        options: {
          // Learn about environment variables: https://gatsby.app/env-vars
          // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
          key: process.env.MEETUP_API_KEY,
          // Mandatory: the URL name of a Meetup Group.
          // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
          groupUrlName: "Zurich-Bewusste-Bewegung-Dehnung-mit-Yin-Yoga-Meetup",
          // Optional parameters for retrieving Events, see full documentation at
          // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
          status: "upcoming,past",
          desc: "false",
          page: 10
        },
      },
      
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-image',
  ],
};
