var webpack = require('webpack');
var path = require('path');

var HttpProxyAgent = require('https-proxy-agent');
// var proxyServer = process.env.HTTP_PROXY || process.env.HTTPS_PROXY;

module.exports =  {
  devtool: 'inline-source-map',
  entry: [
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    proxy: {
      '/spotifyAccounts': {
        target: 'https://accounts.spotify.com',
        pathRewrite: {'^/spotifyAccounts' : ''},
        logLevel: 'debug',
        changeOrigin: true,
        secure: false
        // agent: new HttpProxyAgent(proxyServer)
      },
      '/spotify': {
        target: 'https://api.spotify.com',
        pathRewrite: {'^/spotify' : ''},
        logLevel: 'debug',
        changeOrigin: true,
        secure: false
        // agent: new HttpProxyAgent(proxyServer)
      },
      '/twitter': {
        target: 'https://api.twitter.com',
        pathRewrite: {'^/twitter' : ''},
        logLevel: 'debug',
        changeOrigin: true,
        secure: false
        // agent: new HttpProxyAgent(proxyServer)
      }
    }
    // stats: 'errors-only'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin(['TWITTER_SECRET','TWITTER_KEY','SPOTIFY_SECRET', 'SPOTIFY_KEY'])
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: [
        path.join(__dirname, 'src')
      ], loaders: ['babel-loader']},
      {test: /\.json$/, loader: 'json-loader' },
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
