'use strict';

const bearerAuth = require('./auth/middleware/bearer.js');
const acl = require('./auth/middleware/acl.js');
// const router = require('./auth/router.js');
const express = require('express');
const router = express.Router();
const users = require('./auth/models/users-model.js');

router.get('/secret', bearerAuth, bearerHandler);
router.get('/secretall', bearerAuth, listUsers);

router.get('/read', bearerAuth, acl('read'), readHandler);
router.post('/add', bearerAuth, acl('create'), createHandler);
router.put('/change', bearerAuth, acl('update'), updateHandler);
router.delete('/remove', bearerAuth, acl('delete'), deleteHandler);

function bearerHandler(req, res){
  res.json(req.user);
}

async function listUsers(req, res) {
  return await users.get().then((result)=>{
    res.json(result);
  });
}

function readHandler(req, res){
  res.send('READ DONE');
}

function createHandler(req, res){
  res.send('CREATE DONE!');
}

function updateHandler(req, res){
  res.send('UPDATE DONE!');
}

function deleteHandler(req, res){
  res.send('DELETE DONE!');
}

module.exports = router;