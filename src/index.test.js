import expect from 'expect';

describe('Our first suite', () => {

  it('test 1.1', (done) => {
    let num = getRand(0, 5000);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 1.2', (done) => {
    let num = getRand(0, 5000);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our second suite', () => {

  it('test 2.1', (done) => {
    let num = getRand(0, 5000);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 2.2', (done) => {
    let num = getRand(0, 5000);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our third suite', () => {

  it('test 3.1', (done) => {
    let num = getRand(0, 5000);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 3.2', (done) => {
    let num = getRand(0, 5000);
    setTimeout(function(){return getBoolFalse(done);}, num);
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
