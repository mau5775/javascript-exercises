const helloWorld = require('./helloWorld');

describe('Hello MAU', function() {
  test('says "Hello, My Name!"', function() {
    expect(helloWorld()).toEqual('Hello, MAU!');
  });
});
