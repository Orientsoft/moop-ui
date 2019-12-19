const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const template = fs.readFileSync('index.template').toString();

fs.writeFileSync(path.join('public/index.html'), template.replace(/{{\s*t\s*}}/g, Date.now()));

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
      ignore: ['index.html', 'index.template', 'favicon.png'],
    }]),
  ],
});
