const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = context => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CopyPlugin([{
      from: 'public',
      to: 'static',
      ignore: ['index.html', 'favicon.png'],
    }]),
  ],
});
