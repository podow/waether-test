const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.join(__dirname, './src/components'),
      '@store': path.join(__dirname, './src/store'),
      '@assets': path.join(__dirname, './src/assets'),
      '@interfaces': path.join(__dirname, './src/interfaces'),
      '@utils': path.join(__dirname, './src/utils')
    }
  }
};
