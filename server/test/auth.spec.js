const expect = require('chai').expect;
const { signJWTToken, verifyJWTToken } = require('../modules');
const testConfig = require('./test.config');
const uuidv1 = require('uuid/v1');

describe('JWT Token test scenarios', function() {
	before(function(done) { done(); });
	after(function(done) { done(); });

	let jwt;

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
		
		signJWTToken(testConfig.JWTPayload, testConfig.JWTsecretkey, '10h', (err, token) => {
			// console.log('Token generated :', token);
			expect(err).to.equal(null);
			expect(token).to.not.equal(null);
			jwt = token;

			done();
		});
		
		//done() 
	});

	it('verification of a valid signed token, must return same payload, which was passed', function(done) {

		verifyJWTToken(jwt, testConfig.JWTsecretkey, (err, decoded) => {
			// console.log('Decoded value:', decoded);
			expect(err).to.equal(null);
			expect(token).to.not.equal(null);
			
			expect(decoded).to.deep.equal(testConfig.JWTPayload);
		})

	 done() 
	});
	it('verification a expired token, must return with appropriate error', function(done) {
		done() 
	});
	it('verification a invalid, must return with appropriate error', function(done) {
	 done() 
	});

});