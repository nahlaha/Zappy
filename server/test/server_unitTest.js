var server = require('../server');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

describe('tweets', function() {
    it('should return list of all tweets in database', function(done) {
        chai.request(server)
            .get('/tweets')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });
})

describe('insertTweets', () => {
    it('should insert new tweets in database', (done) => {
        chai.request(server)
            .post('/slack')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
})