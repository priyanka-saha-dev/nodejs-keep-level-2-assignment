const User = require('./user.entity');
const uuidv1 = require('uuid/v1');

const login = (info) => {
  //console.log('user data for Login: ', info);

  return new Promise((resolve, reject) => {
    const query = {
      username : info.username
    };

    User.findOne(query, (error, doc) => {

      if (error) {
        reject({
          message: 'Login Failed.',
          status: 500
        });
      } else if(!doc) {
        reject({
          message: 'You are not registered user',
          status: 403
        });
      } else if(doc.password !== info.password) {
        reject({
          message: 'Password is incorrect',
          status: 403
        });
      } else {

        let user = {
          userName : doc.username,
          userId : doc.userId
        }
        resolve({
          message: 'Login Success.',
          status: 200,
          user: user
        });
      }
    });
  });
};

const register = (info) => {
  
  return new Promise((resolve, reject) => {
    let user = new User(info);

    user.userId = uuidv1();

    // console.log('user data for Register: ', user);
    user.save((error, doc) => {
      if (error) {
        //console.log('Error occured in DAO', error);

        if(error.message.includes('duplicate')) {
          reject({
            message: 'username is already exist',
            status: 403
          });
        } else {
          reject({
            message: 'Registration Failed.',
            status: 500
          });
        }

      } else {
        //console.log('Success occured in DAO');
        let user = {
          userInfo: doc.username
        }
        resolve({
          message: 'Registration Success.',
          status: 201,
          //userInfo: doc.username
          user : user
        });
      }
    });
  });
};

module.exports = {
  login,
  register
};