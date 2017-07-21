# Mocha Grommet Reporter Example

This is test file to run with the [mocha-grommet-reporter](https://www.npmjs.com/package/mocha-grommet-reporter). This is now being served by Webpack, rather than Express to allow API calls to be proxied more easily.

## If you using for API calls, set environment variables. ie. calling Spotify

'''

HTTP_PROXY={proxy address}
HTTPS_PROXY={proxy address}

SPOTIFY_KEY={key}
SPOTIFY_SECRET={secret}

'''

## Set webpack proxy config with correct endpoints

'''

var HttpProxyAgent = require('https-proxy-agent');
var proxyServer = process.env.HTTP_PROXY || process.env.HTTPS_PROXY;

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    proxy: {
      '/spotify': {
        target: 'https://accounts.spotify.com',
        pathRewrite: {'^/spotify' : ''},
        logLevel: 'debug',
        changeOrigin: true,
        secure: false,
        agent: new HttpProxyAgent(proxyServer)
      },
    }
    // stats: 'errors-only'
  }
  
  // add environment variables used in API call tests to webpack.EnvironmentPlugin
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.EnvironmentPlugin(['SPOTIFY_SECRET', 'SPOTIFY_KEY'])
    ],

'''

## To run:

1. npm install 
1. npm start
1. go to 'localhost:8080' in browser
