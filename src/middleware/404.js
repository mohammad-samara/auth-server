'use strict';

/**
 * 404 not found errors middleware 
 * @module notFoundError
 * @param   req
 * @param   res
 * @param   next
 */

function notFoundHandler(req,res,next){
  res.status(404);
  res.statusMessage = 'Recource Not Found :(';
  res.json({error: 'not Found'});
}
module.exports = notFoundHandler;