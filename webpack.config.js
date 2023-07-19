const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },
  plugins: [new Dotenv(), new NodePolyfillPlugin()],
  externals: [nodeExternals()],
};
