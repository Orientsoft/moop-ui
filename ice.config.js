const path = require('path');
const webpack = require('webpack');
const bundles = require('./manifests/manifest.json');

module.exports = {
  entry: {
		app: './src/index.js',
	},
  hash: true,
  outputDir: path.resolve(__dirname, 'build'),
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  devServer: {
    historyApiFallback: true,
  },
  proxy: {
    '/api/v1': {
      enable: true,
      target: 'http://192.168.0.129:7777',
    },
  },
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
      uniteBaseComponent: '@alife/next',
    }],
  ],
  chainWebpack: (config) => {
    config.plugin('HtmlWebpackPlugin')
      .tap(([options]) => [{
        ...options,
        templateParameters: {
          t: Date.now(),
          bundles: Object.values(bundles),
        },
      }]);
    config.plugin('CoreManifest')
      .use(webpack.DllReferencePlugin, [{
        manifest: require('./manifests/core.json'),
      }]);
    config.plugin('UtilsManifest')
      .use(webpack.DllReferencePlugin, [{
        manifest: require('./manifests/utils.json'),
      }]);
    config.plugin('ChartsManifest')
      .use(webpack.DllReferencePlugin, [{
        manifest: require('./manifests/charts.json'),
      }]);
    config.plugin('EditorManifest')
      .use(webpack.DllReferencePlugin, [{
        manifest: require('./manifests/editor.json'),
      }]);
  },
};
