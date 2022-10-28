const express = require('express');
const router = express.Router();
const CommentService = require('../services/coment.service');
const validatorHandler = require('./../middlewares/validator.handler');

const service = new CommentService();
const {
  createComentDto,
  updateComentDto,
  getcommentId,
} = require('../dtos/coment.dto');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const coment = await service.find(limit);
  res.json(coment);
});

//STATUS CODE

router.get(
  '/:id',
  validatorHandler(getcommentId, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const coments = await service.findOne(id);
      res.json({
        success: true,
        message: 'Este es el comentario encontrado',
        data: coments,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  //validatorHandler(createComentDto, 'body'),
  //ERROR EN EL VALIDATOR HANDLE AL INTENTAR CREAR UN COMENTARIO--
  //SIGUE SIN CREARSE COMENTARIO AUNQUE DIGA QUE SI LO ESTA HACIENTO
  async (req, res, next) => {
    const body = req.body;
    try {
      const newComent = await service.create(body);
      res.json({
        success: true,
        message: 'Comentario creado correctamente',
        data: newComent,
      });
    } catch (error) {
      next(error);
    }
  }
);

//MENSAJES DE ERROR
router.patch(
  '/:id',
  validatorHandler(getcommentId, 'params'),
  validatorHandler(updateComentDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const coment = await service.update(id, body);
      res.json({
        message: 'update',
        data: coment,
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
  validatorHandler(getcommentId, 'params'),
  validatorHandler(updateComentDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const coments = await service.updateComplete(id, body);
      res.json({
        message: 'update total',
        data: coments,
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
  validatorHandler(getcommentId, 'params'),
  async (req, res) => {
    const { id } = req.params;
    res.json({
      message: 'delete',
      id,
    });
  }
);

module.exports = router;
