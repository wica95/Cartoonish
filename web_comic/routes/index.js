const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const postRouter = require('./post.router');
const comentRouter = require('./coment.router');
const generoRouter = require('./genero.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/post', postRouter);
  router.use('/coment', comentRouter);
  router.use('/genero', generoRouter);
}

module.exports = routerApi;


