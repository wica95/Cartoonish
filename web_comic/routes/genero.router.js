const express = require('express');
const router = express.Router();
const GeneroService = require('../services/genero.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new GeneroService();
const {
  createGeneroDto,
  updateGeneroDto,
  getGeneroId,
} = require('../dtos/genero.dto');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const generos = await service.find(limit);
  res.json(generos);
});

//STATUS CODE

router.get(
  '/:id',
  validatorHandler(getGeneroId, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const genero = await service.findOne(id);
      res.json({
        success: true,
        message: 'Este es el genero encontrado',
        data: genero,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createGeneroDto, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newGenero = await service.create(body);
      res.json({
        success: true,
        message: 'Genero creado correctamente',
        data: newGenero,
      });
    } catch (error) {
      next(error);
    }
  }
);

//MENSAJES DE ERROR
router.patch(
  '/:id',
  validatorHandler(getGeneroId, 'params'),
  validatorHandler(updateGeneroDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const genero = await service.update(id, body);
      res.json({
        message: 'update',
        data: genero,
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
  validatorHandler(getGeneroId, 'params'),
  validatorHandler(updateGeneroDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const genero = await service.updateComplete(id, body);
      res.json({
        message: 'update total',
        data: genero,
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
  validatorHandler(getGeneroId, 'params'),
  async (req, res) => {
    const { id } = req.params;
    res.json({
      message: 'delete',
      id,
    });
  }
);

module.exports = router;
