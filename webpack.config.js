const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
module.exports = {
  context: __dirname,
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './src/index.jsx',
    vendor: ['react', 'velocity-react']
  },
  resolve: {
    extensions: ['', '.webpack.js', '.js', '.jsx'],
    alias: {
      'webworkify': 'webworkify-webpack'
    },
    modules: ['node_modules', 'src']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
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
