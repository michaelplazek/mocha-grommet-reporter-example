import expect from 'expect';

const MAX_DELAY = 10;

describe('Our first suite', () => {

  it('test 1.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 1.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our second suite', () => {

  it('test 2.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 2.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});


function getBoolTrue(done) {
  expect(true).toEqual(true);
  done();
}


