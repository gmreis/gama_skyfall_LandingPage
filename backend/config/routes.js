const express = require('express')
const url = require('url')

module.exports = function(server) {

  server.use(function(req, res, next) {
    console.log('teste');
    next();

    /*
    if(req.method === 'GET' && req.url.indexOf('/urls') == 0 ) {
      console.log('teste1');
      next();
    } else if(req.headers['content-type'] == 'application/json') {
      console.log('teste2');
      next()
    } else {
      console.log('teste3');
      res.status(406).end();
    }
    */
  })

  // API Routes
  const router = express.Router()

  server.use('/', router)

  const participanteService = require('../api/participante/participanteService')

  // POST /participante
  router.route('/participantes').post(participanteService.addParticipante)

/*
  const userService = require('../api/user/userService')
  // POST /users/:userId/urls
  router.route('/users/:userId/urls').post(userService.addUrl)
  //GET /users/:userId/stats
  router.route('/users/:userId/stats').get(userService.stats)
  //POST /users
  router.route('/users').post(userService.add)
  // DELETE /user/:userId
  router.route('/user/:userId').delete(userService.remove)
*/
}
