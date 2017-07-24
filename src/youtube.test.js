import chai from 'chai';
let expect = chai.expect;
let assert = chai.assert;

require('isomorphic-fetch');
require('es6-promise').polyfill();

let auth = process.env.YOUTUBE_KEY;
let token = window.btoa(auth);
let access_token = null;
let status = null;

let initGet = {
  method: 'GET',
  // mode: 'no-cors',
  key: auth,
  headers : {
    'Content-Type':'application/x-www-form-urlencoded'
  }
};

describe('YouTube API', function(){

  it('Playlist search returns valid object', function(done){
    fetch('/youtube/search?q=kendrick&maxResults=20&part=snippet', initGet)
      .then(function(response){
        try{
          expect(response.status).to.equal(200);
        }
        catch(error){
          done(error);
        }
      });
  });
});

