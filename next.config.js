const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const typescript = require('@zeit/next-typescript');
const isBuild = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: isBuild ? '[hash:base64:5]' : '[local]-[hash:base64:5]',
    },
    sassLoaderOptions: {
      includePaths: [
        'node_modules',
        'src/styles'
      ],
    }
  }],
  [css, {
    cssModules: false,
  }],
  [typescript],
], {
  distDir: '../.next',
  assetPrefix: './',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
  // Reference to nextjs.org/docs/#static-html-export
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
});
