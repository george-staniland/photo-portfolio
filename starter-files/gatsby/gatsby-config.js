module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Noto Sans JP',
            variants: [`300`, `400`, `500,`, `700`],
          },
          {
            family: 'Merriweather',
            variants: [`300`, `400`, `400i`, `700`, `700i`, `900`, `900i`],
          },
        ],
      },
    },
  ],
};
