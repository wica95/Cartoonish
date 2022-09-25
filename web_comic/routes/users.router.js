const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new UsersService();
const {
  createUserDto,
  updateUserDto,
  getUserId,
} = require('../dtos/users.dto');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const users = await service.find(limit);
  res.json(users);
});

//STATUS CODE

router.get(
  '/:id',
  validatorHandler(getUserId, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json({
        success: true,
        message: 'Este es el usuario encontrado',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createUserDto, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newUser = await service.create(body);
      res.json({
        success: true,
        message: 'Usuario creado correctamente',
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  }
);

//MENSAJES DE ERROR
router.patch(
  '/:id',
  validatorHandler(getUserId, 'params'),
  validatorHandler(updateUserDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json({
        message: 'Usuario actualizado correctamente',
        data: user,
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
  validatorHandler(getUserId, 'params'),
  validatorHandler(updateUserDto, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.updateComplete(id, body);
      res.json({
        message: 'update total',
        data: user,
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
  validatorHandler(getUserId, 'params'),
  async (req, res) => {
    const { id } = req.params;
    res.json({
      message: 'delete',
      id,
    });
  }
);

module.exports = router;
