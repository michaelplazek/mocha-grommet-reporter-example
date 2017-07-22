import chai from 'chai';
let expect = chai.expect;
let assert = chai.assert;

require('isomorphic-fetch');
require('es6-promise').polyfill();

let auth = process.env.TWITTER_KEY + ":" + process.env.TWITTER_SECRET;
let token = window.btoa(auth);
let access_token = null;
let status = null;

let initPost = {
  method: 'POST',
  // mode: 'no-cors',
  body: 'grant_type=client_credentials',
  headers : {
    'Authorization':'Basic ' + token,
    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
  }
};

let initGet = null;

describe('Twitter API', function(){

  before(function(done){
    fetch('/twitter/oauth2/token', initPost)
      .then(function(response){
        try{
          status = response.status;
          return response.json();
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

  it('Returns access token', function(done){
    try{
      expect(status).to.equal(200);
      done();
    }
    catch(error){
      done(error);
    }
  });

  it('Returns valid user object', function(done){
    fetch(
      '/twitter1.1/users/lookup.json?screen_name=mike___tv', initGet)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result).to.be.an('array');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Returns valid tweet object', function(done){
    fetch(
      '/twitter/1.1/search/tweets.json?q=trump', initGet)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result).to.be.an('object');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Allows tweets to be searched', function(done){
    fetch(
      '/twitter/1.1/search/tweets.json?q=%23trump', initGet)
      .then(function(response){
        expect(response.status).to.equal(200);
        return response.json();
      })
      .then(function(result){
        try{
          expect(result).to.be.an('object');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });
});
