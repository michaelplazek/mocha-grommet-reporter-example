import expect from 'expect';

const MAX_DELAY = 10;

describe('Our first suite again', () => {

  it('test 1.1.n', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 1.2.n', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our second suite again', () => {

  it('test 2.1.n', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 2.2.n', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});


function getBoolTrue(done) {
  expect(true).toEqual(true);
  done();
}


