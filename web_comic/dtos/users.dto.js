const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string();
const isActive = Joi.boolean();
const name = Joi.string().min(4).max(50);
const mail = Joi.string().min(4).max(50);
const pass = Joi.string().alphanum().min(4).max(50);
const image = Joi.string();

const createUserDto = Joi.object({
  isActive: isActive.required(),
  name: name.required(),
  mail: mail.required(),
  pass: pass.required(),
  image: image.required(),
});

const updateUserDto = Joi.object({
  isActive: isActive,
  name: name,
  mail: mail,
  pass: pass,
  image: image,
});

const getUserId = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserDto,
  updateUserDto,
  getUserId,
};
