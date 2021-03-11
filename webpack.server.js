const path = require('path');
const webpackConfig = require('./webpack.config');
const fs  = require('fs');

const prodEnv = 'https://terminus-org.dev.terminus.io';
// const prodEnv = 'https://terminus-org.app.terminus.io';

const backendUrl = 'https://terminus-org.dev.terminus.io';
const frontUrl = `local.${backendUrl.replace(/http(s?):\/\//, '')}`; // local与对应环境根域名一致
const port = 8007;

const devServer = {
  port: port,
  host: frontUrl,
  compress: true,
  contentBase: path.join(__dirname, 'public'),
  index: 'index.html',
  open: true,
  noInfo: false,
  progress: false,
  historyApiFallback: true,
  watchContentBase: false,
  liveReload: false,
  hot: true,
  https: {
    key: fs.readFileSync('./cert/dev/server.key'),
    cert: fs.readFileSync('./cert/dev/server.crt'),
  },
  proxy: {
    '/api': {
      target: prodEnv,
      changeOrigin: true,
      secure: false
    },
    '/env': {
      target: prodEnv,
      secure: false,
      onProxyRes(proxyRes, req, res) {
        res.json({ "fullSite": true });
      },
    },
  },
  allowedHosts: [
    frontUrl,
  ],
  watchOptions: {
    // @@@ 独立模块列表
    ignored: [
      'node_modules', 'public', 'test', 'docs', 'tmp',
    ],
  },
};

module.exports = {
  ...webpackConfig(),
  devServer,
};
