const path = require('path');

module.exports = {
  entry: 'src/index.js',
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
        templateParameters: { t: Date.now() },
      }]);
    config.optimization.splitChunks({
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 1,
        },
      },
    });
  },
};
