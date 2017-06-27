import expect from 'expect';

describe('another suite 1', () => {

  it('another test 1.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 1.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 2', () => {

  it('another test 2.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 2.2', (done) => {
    getBoolFalse(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 3', () => {

  it('another test 3.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 3.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 4', () => {

  it('another test 4.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 4.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 5', () => {

  it('another test 5.1', (done) => {
    getBoolFalse(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 5.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 6', () => {

  it('another test 6.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 6.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 7', () => {

  it('another test 7.1', (done) => {
    getBoolFalse(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 7.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 8', () => {

  it('another test 8.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 8.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('another suite 9', () => {

  it('another test 9.1', (done) => {
    getBoolFalse(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('another test 9.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

function getBoolTrue(done) {
  expect(true).toEqual(true);
  done();
}

function getBoolFalse(done) {
  try{
    expect(false).toEqual(true);
    done();
  }
  catch(error){
    done(error);
  }

}

function getRand(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  let rand = Math.floor(Math.random() * (max - min + 1) + min);

  return rand;
}
