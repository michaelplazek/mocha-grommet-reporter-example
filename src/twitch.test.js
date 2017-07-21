import chai from 'chai';
let expect = chai.expect;
let assert = chai.assert;

require('isomorphic-fetch');
require('es6-promise').polyfill();

let base = "https://api.twitch.tv/kraken";

let init = {
  method: 'GET',
  headers: {
    'Client-ID':'n43ajf7u4wvecc897lq1du5wctxedd',
    'Accept':'application/vnd.twitchtv.v5+json'
  }
};

describe('Twitch API', function(){
  it('Returns HTTP Status 200', function(done){
    fetch(base, init)
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

  it('Receive token authorization', function(done){
    fetch(base, init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.token.valid).to.equal(true);
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Returns valid user object', function(done){
    fetch(base + '/users?login=mike___tv', init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.users).to.have.lengthOf(1);
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Returns valid game object', function(done){
    fetch(base + '/search/games?query=player', init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.games).to.be.an('array');
          done();
        }
        catch(error){
          done(error);
        }
      });
    });

  it('Returns valid channel object', function(done){
    fetch(base + '/search/channels?query=DrDisRespect', init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.channels).to.be.an('array');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Returns valid stream object', function(done){
    fetch(base + '/search/streams?query=DrDisRespect', init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.streams).to.be.an('array');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });
});

// fetch(base + '/users?login=mike___tv', init)
//   .then(function(response){
//     console.log(response);
//     if(response.status === 200){
//       return response.json();
//     }
//     else{
//       throw new Error("Bad request");
//     }
//   })
//   .then(function(result){
//     console.log(result);
//   });



// function(error,meta,body){console.log(body);});
