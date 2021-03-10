const path = require('path');
// const fs = require('fs');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const plugins = [];
// if (!process.env.SPLIT_MODULE && fs.existsSync('./public/static/manifest.json')) {
//   plugins.push(
//     new webpack.DllReferencePlugin({
//       context: __dirname,
//       manifest: require('./public/static/manifest.json'),
//     }),
//   );
// }

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  watchOptions: {
    aggregateTimeout: 500,
    ignored: [
      'node_modules', 'public', 'test', 'docs', 'tmp',
    ],
    poll: 5000,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[id].chunk.js',
    publicPath: '/',
  },
  stats: { children: false },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      ignoreOrder: true,
    }),
  ],
  optimization: {
    minimize: false,
  },
};
