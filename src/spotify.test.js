import chai from 'chai';
let expect = chai.expect;
let assert = chai.assert;

require('isomorphic-fetch');
require('es6-promise').polyfill();

let auth = process.env.SPOTIFY_KEY + ":" + process.env.SPOTIFY_SECRET;
let token = window.btoa(auth);
let access_token = null;
let status = null;

let initPost = {
  method: 'POST',
  // mode: 'no-cors',
  body: 'grant_type=client_credentials',
  headers : {
    'Authorization':'Basic ' + token,
    'Content-Type':'application/x-www-form-urlencoded'
  }
};

let initGet = null;

describe('Spotify API', function(){

  before(function(done){
    fetch('/spotifyAccounts/api/token', initPost)
      .then(function(response){
        try{
          status = response.status;
          return response;
        }
        catch(error){
          done(error);
        }

      })
      .then(function(result){
        access_token = result.access_token;
        initGet = {
          method: 'GET',
          // mode: 'no-cors',
          headers : {
            'Authorization':'Bearer ' + access_token
          }
        };
        done();
      });
  });

  it('Search returns valid artist object', function(done){
    fetch('/spotify/v1/search?q=kendrick&type=artist', initGet)
      .then(function(response){
        try{
          expect(response.status).to.equal(200);
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Search returns valid album object', function(done){
    fetch('/spotify/v1/search?q=kendrick&type=album', initGet)
      .then(function(response){
        try{
          expect(response.status).to.equal(200);
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Search returns valid track object', function(done){
    fetch('/spotify/v1/search?q=kendrick&type=track', initGet)
      .then(function(response){
        try{
          expect(response.status).to.equal(200);
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Search returns valid playlist object', function(done){
    fetch('/spotify/v1/search?q=kendrick&type=playlist', initGet)
      .then(function(response){
        try{
          expect(response.status).to.equal(200);
          done();
        }
        catch(error){
          done(error);
        }
      });
  });
});
