import chai from 'chai';
let expect = chai.expect;
let assert = chai.assert;

require('isomorphic-fetch');
require('es6-promise').polyfill();

let init = {
  method: 'POST',
  // mode: 'no-cors',
  body: {
    'grant_type':'client_credentials'
  },
  headers : {
    'Authorization':'Basic' + process.env.SPOTIFY_KEY + ':' + process.env.SPORTIFY_SECRET,
    'Content-Type':'application/json'
  }
};

describe('Spotify API', function(){
  it('Request Access Token', function(done){
    fetch('/spotify/api/token', init)
      .then(function(response){
        console.log(response);
      });
  });
});
