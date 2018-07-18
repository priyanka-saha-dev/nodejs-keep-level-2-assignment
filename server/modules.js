/* Replace undefined with Require of your Mongoose connection initialization method */
const initializeMongooseConnection = undefined;
/* Replace undefined with Require of your note entity*/
const noteModel = undefined;
/* Replace undefined with Require of your user entity*/
const userModel = undefined;
/* Replace undefined with the method or function reference, which signs the token with given payload, expiry time and secret, call back should have error or signed token */
const signJWTToken = undefined;
/* Replace undefined with the method or function reference, which verifies a given JWT Token and callback with error & payload */
const verifyJWTToken = undefined;

module.exports = {
	initializeMongooseConnection,
	noteModel,
	userModel,
	signJWTToken,
	verifyJWTToken
}