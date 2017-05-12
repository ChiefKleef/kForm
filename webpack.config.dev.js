var path = require('path');
const webpack = require('webpack');


module.exports = {
  context: __dirname,
  entry: {
    bundle: './src/index.jsx',
    vendor: ['react', 'react-dom']
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'webworkify': 'webworkify-webpack'
    },
    modules: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'src/'),
    publicPath: 'src/', // relative path for github pages
    filename: '[name].js', // no hash in main.js because index.html is a static page
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: 'node_modules',
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
      loader: 'worker'
    },
    {
      test: /mapbox-gl.+\.js$/,
      loader: 'transform/cacheable?brfs'
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: '/\.(jpg|png)$/', //eslint-disable-line
      loader: 'url-loader?mimetype=image/png'
    }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
