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
    // jwt.verify(token, secret, callback);

    // jwt.verify(token, secret, (error, decoded) => {
    //     let errMsg;
    //     if (error && !decoded) {
    //         errMsg = 'invalid token';
    //     }

    //     callback(errMsg, decoded);

    // });

    return new Promise((resolve, reject) => {

        jwt.verify(token, secret, (error, decoded) => {

            if (!error && decoded) {

                resolve({
                    message: 'valid token',
                    decoded: decoded,
                    status: 200
                });
                
            } else {
                //callback(error, decoded);
                reject({
                    message: 'invalid token',
                    status: 403
                });
                
            }

        });
    });
};

const isUserAuthenticated = (req, res, next) => {
    const header = req.get('Authorization');
    // console.log('header : ', header);
    if (!header) {
        res.status(403).send('Not authenticated');
    } else {
        const token = header.replace('Bearer ', '');
        //console.log('token : ' , token);

        verifyToken(token, authConfig.jwtSecret, (err, decoded) => {



        }).then((response) => {
            //res.status(response.status).send(response.message);

            if (response && response.decoded) {
                next();
            }

        }).catch((error) => {
            res.status(error.status).send(error.message);
        });
    }
};

const isUserAuthenticatedRouter = (req, res) => {

    return new Promise((resolve, reject) => {

        resolve({
            status : 200,
            message : 'valid'
        })
        // const header = req.get('Authorization');

        // if (!header) {
        //     reject({
        //         message: 'Not authenticated',
        //         status: 403
        //     });
        // } else {
        //     const token = header.replace('Bearer ', '');

        //     verifyToken(token, authConfig.jwtSecret, (err, decoded) => {

        //         // console.log('err:',err);
        //         if (err) {

        //             reject({
        //                 message: 'invalid token',
        //                 status: 403
        //             });

        //         } else {

        //             resolve({
        //                 message: 'valid token',
        //                 status: 403
        //             });
        //         }
        //     })
        // }
    });

};

module.exports = {
    signToken,
    verifyToken,
    isUserAuthenticated,
    isUserAuthenticatedRouter
}