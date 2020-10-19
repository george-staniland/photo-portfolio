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
        ],
      },
    },
  ],
};
