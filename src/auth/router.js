'use strict';
const express = require('express');
const router = express.Router();
const users = require('./models/users-model.js');
const basicAuth = require('./middleware/basic.js');
const ouath = require('./middleware/oauth');


router.post('/signup', signupHandler);
router.post('/signin', basicAuth ,signinHandler);
router.get('/users', basicAuth ,usersHandler);
router.get('/oauth', ouath, (req, res)=> {
  res.status(200).send(req.token);
});


async function signupHandler (req,res){
  try{
    const user = await users.save(req.body);
    console.log('USER DATA:' , user);
    const token = users.generateToken(user);
    res.json({ token });
  }catch(err){
    res.status(403).send('user already exists');
  }
      
}
  
function signinHandler(req,res){
  res.json({ token: req.token , user: req.user });

}

async function usersHandler(req, res) {
  return await users.get().then((result)=>{
    res.json(result);
  });
}

module.exports = router;