const expect = require('chai').expect;
const { signJWTToken, verifyJWTToken } = require('../modules');

describe('JWT Token test scenarios', function() {
	before(function(done) { done(); });
	after(function(done) { done(); });

	it('Assert signing & verification methods exists and are valid', function() {
		expect(signJWTToken).to.not.equal(undefined);
		expect(signJWTToken).to.not.equal(null);
		expect(typeof(signJWTToken)).to.equal('function');
		expect(signJWTToken.length).to.be.above(0, 'this method must have arguments');

		expect(verifyJWTToken).to.not.equal(undefined);
		expect(verifyJWTToken).to.not.equal(null);
		expect(typeof(verifyJWTToken)).to.equal('function');
		expect(verifyJWTToken.length).to.be.above(0, 'this method must have arguments');

		expect(signJWTToken).to.be.an('function');
	});

	it('sign a token with valid payload, signature, secret and expiry time', function(done) { 
		done() 
	});
	it('verification of a valid signed token, must return same payload, which was passed', function(done) {
	 done() 
	});
	it('verification a expired token, must return with appropriate error', function(done) {
		done() 
	});
	it('verification a invalid, must return with appropriate error', function(done) {
	 done() 
	});

});