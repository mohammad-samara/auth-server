'use strict';

const bearerAuth = require('./auth/middleware/bearer.js');
// const router = require('./auth/router.js');
const express = require('express');
const router = express.Router();
const users = require('./auth/models/users-model.js');

router.get('/secret', bearerAuth, bearerHandler);
router.get('/secretall', bearerAuth, listUsers);

function bearerHandler(req, res){
  res.json(req.user);
}

async function listUsers(req, res) {
  return await users.get().then((result)=>{
    res.json(result);
  });
}

module.exports = router;