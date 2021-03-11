const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const moment = require('moment');

const gitRevisionPlugin = new GitRevisionPlugin();
const banner = `version: ${gitRevisionPlugin.version()}
branch: ${gitRevisionPlugin.branch()}
buildTime: ${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}`;

module.exports = {
  mode: 'production',
  output: {
    pathinfo: false,
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[chunkhash].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      ignoreOrder: true,
    }),
  ],
  optimization: {
    minimize: true,
    // namedChunks: true,
    // moduleIds: 'named',
    minimizer: [
      new webpack.BannerPlugin(banner),
      new TerserPlugin({
        parallel: 1,
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
