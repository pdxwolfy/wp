module.exports = {
  entry: './src/main.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            '@babel/plugin-transform-runtime'
          ],
          presets: [
            '@babel/preset-env'
          ]
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  }
};
