const express = require('express');
const router = express.Router();
const PostService = require('../services/post.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new PostService();
const {
  createPostDto,
  updatePostDto,
  getPosttId,
} = require('../dtos/post.dto');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const posts = await service.find(limit);
  res.json(posts);
});

//STATUS CODE

router.get(
  '/:id',
  validatorHandler(getPosttId, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await service.findOne(id);
      res.json({
        success: true,
        message: 'Este es la publicacion encontrado',
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createPostDto, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newPost = await service.create(body);
      res.json({
        success: true,
        message: 'Publicacion creado correctamente',
        data: newPost,
      });
    } catch (error) {
      next(error);
    }
  }
);

//MENSAJES DE ERROR
router.patch(
  '/:id',
  validatorHandler(getPosttId, 'params'),
  validatorHandler(updatePostDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const post = await service.update(id, body);
      res.json({
        message: 'Publicacion actualizado correctamente',
        data: post,
        id,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
);

router.put(
  '/:id',
  validatorHandler(getPosttId, 'params'),
  validatorHandler(updatePostDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const post = await service.updateComplete(id, body);
      res.json({
        message: 'update total',
        data: post,
        id,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getPosttId, 'params'),
  async (req, res) => {
    const { id } = req.params;
    res.json({
      message: 'delete',
      id,
    });
  }
);

module.exports = router;
