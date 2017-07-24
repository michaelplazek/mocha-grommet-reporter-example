import chai from 'chai';
let expect = chai.expect;
let assert = chai.assert;

require('isomorphic-fetch');
require('es6-promise').polyfill();

let base = "https://omgvamp-hearthstone-v1.p.mashape.com/";

let init = {
  method: 'GET',
  headers: {
    "X-Mashape-Key":"AMg6Uwy10SmshyqyuZ0tzfeP6wo9p1jMGnNjsnZyp95dHbsUHK",
    'Accept':'application/json'
  }
};

describe('Hearthstone API', function(){
  it('Returns HTTP Status 200', function(done){
    fetch(base + 'cards', init)
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

  it('Returns valid card object', function(done){
    fetch(base + 'cards', init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.Basic).to.be.an('array');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Returns valid info object', function(done){
    fetch(base + 'info', init)
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        try{
          expect(result.classes).to.be.an('array');
          expect(result.sets).to.be.an('array');
          expect(result.types).to.be.an('array');
          expect(result.factions).to.be.an('array');
          expect(result.qualities).to.be.an('array');
          done();
        }
        catch(error){
          done(error);
        }
      });
  });

  it('Returns valid cardback object', function(done){
    fetch(base + 'cardbacks', init)
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
});
