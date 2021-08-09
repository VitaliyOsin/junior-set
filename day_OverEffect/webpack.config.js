const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
      port: 4200,
      open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ],
  }
};