const jwt = require('jsonwebtoken');
const { authConfig } = require('../../../config').appConfig;

const signToken = (payload, secret, expireIn, callback) => {
    // console.log('Sign token');
    const ex = { expiresIn: expireIn };
    jwt.sign(payload, secret, ex, callback);

    // jwt.sign({ foo: 'bar' }, 'jwttokenbasedauth', function (err, token) {
    //     console.log('err', err);
    //     console.log('token', token);
    // });

};

const verifyToken = (token, secret, callback) => {
    jwt.verify(token, secret, callback);
};

const isUserAuthenticated = (req, res, next) => {
    const header = req.get('Authorization');
    //console.log('header : ', header);
    if (!header) {
        res.status(403).send('Not authenticated');
    } else {
        const token = header.replace('Bearer ', '');
        //console.log('token : ' , token);
    
        verifyToken(token, authConfig.jwtSecret, (err, decoded) => {
            if (err) {
                res.end('invalid token');
            } else {
                req.userId = decoded.userId;
                next();
            }
        })
    }
};

module.exports = {
    signToken,
    verifyToken,
    isUserAuthenticated
}