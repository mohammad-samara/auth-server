'use strict';

const users = require('../models/users-model');


module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return next('Invalid Login no auth headers');
  } else {
    const [auth, token] = req.headers.authorization.split(' ');
    // console.log('auth-------------->',auth);
    // console.log('token------------>',token);
    if (auth === 'Bearer') {
      users
        .authenticateToken(token)
        .then((validUser) => {
          console.log('validUser---------->',validUser);
          req.user = validUser;
          next();
        })
        .catch((e) => next('Invalid Token'));
    } else {
      return next('Invalid Bearer');
    }
  }
};