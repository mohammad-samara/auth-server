'use strict';
// we are expecting the bearerAuth middleware to add the user on the req
// we need to find the user capabilities
// req.user.capabilities = Array of capabilities regarding the role


// check users roles and of they are allowed to do the action
module.exports = (action) => {
  return (req, res, next) => {
    // I already know that my token has both username and actions array
    // check actions value from the token and then check if action is in the actions array.
    console.log('in acl middleware !!! ');
    console.log('-------------------------------');
    console.log(req.user); // this is coming from the bearerMiddleware.
    console.log('------++++++++++--------');
    // use includes 
    // arr = ['a', 'b', 'c'];
    // get me the index of b : 1
    // get me the index of a : 0  
    // get me the index of z : -1 
    // if (arr.indexOf(action) != -1)
    try {
      if (req.user.tokenObject.actions.includes(action)) {
        next();
      } else {
        // you have actions but you are trying 
        // to access a route that you dont have access on.
        next('Habrawi says Invalid Action! ');
      }
    } catch (e) {
      next('Invalid!');
    }
  };
};
