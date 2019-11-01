const fs = require('fs');
const path = require('path');

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
  }
});
