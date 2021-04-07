const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  watchOptions: {
    ignored: [
      'node_modules', 'public', 'test', 'docs', 'tmp',
    ],
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
