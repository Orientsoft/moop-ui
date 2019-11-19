const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

const manifestPath = path.join(__dirname, 'manifests');

module.exports = {
  entry: {
    core: [
      'react',
      'react-dom',
      'react-router-dom',
      '@alifd/next',
      '@pixcai/make-api',
    ],
    utils: [
      'classnames',
      'prop-types',
      'lodash-es',
      'moment',
      'query-string',
    ],
    charts: [
      'bizcharts',
      '@antv/data-set',
    ],
    editor: [
      'braft-editor',
      'braft-extensions',
      'react-markdown',
    ],
  },
  output: {
    path: path.join(__dirname, 'public', 'dll'),
    publicPath: '/dll',
    filename: '[name].[hash:6].js',
    library: '[name]_[hash:6]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(manifestPath, '[name].json'),
      name: '[name]_[hash:6]',
    }),
    new AssetsPlugin({
      filename: 'manifest.json',
      path: manifestPath,
      prettyPrint: true,
    }),
  ],
};
