var index = require('../index');
var request = require('supertest');
require('should');

describe('index', function () {
  it('should respond correct text.', function (done) {
    request(index)
    .get('/')
    .end(function(err, res){
      res.text.should.equal('Hello DevOps Handson marie(*_*)!!!!!');
      done();
    });
  });
});
