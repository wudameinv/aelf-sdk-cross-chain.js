/**
 * @file browser config
 * @author atom-yang
 */

/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const {
  OUTPUT_PATH
} = require('./utils');

const browserConfig = {
  // mode: 'production',
  mode: 'development',
  output: {
    path: OUTPUT_PATH,
    filename: 'aelf-cross-chain.umd.js',
    library: 'AElfCrossChain',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  resolve: {
    alias: {}
  },
  node: {
    Buffer: true,
    crypto: true,
    stream: true,
    fs: 'empty',
    http: false,
    https: false,
    child_process: false
  },
  // externals: {
  //   xmlhttprequest: {
  //     commonjs2: 'xmlhttprequest',
  //     commonjs: 'xmlhttprequest',
  //     umd: 'xmlhttprequest',
  //     root: 'xmlhttprequest'
  //   },
  //   'xhr2-cookies': {
  //     commonjs2: 'xmlhttprequest',
  //     commonjs: 'xmlhttprequest',
  //     umd: 'xmlhttprequest',
  //     root: 'xmlhttprequest'
  //   }
  // },
  target: 'web',
  // optimization: {
  //   removeEmptyChunks: true,
  //   occurrenceOrder: true,
  //   sideEffects: true,
  //   minimize: true
  // }
};


module.exports = merge(baseConfig, browserConfig);
