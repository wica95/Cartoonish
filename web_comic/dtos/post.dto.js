const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string();
const isActive = Joi.boolean();
const title = Joi.string().min(1).max(50);
const summary = Joi.string().min(20).max(200);
const image = Joi.string();

const createPostDto = Joi.object({
  isActive: isActive.required(),
  title: title.required(),
  summary: summary.required(),
  image: image.required(),
});

const updatePostDto = Joi.object({
  isActive: isActive,
  title: title,
  summary: summary,
  image: image,
});

const getPosttId = Joi.object({
  id: id.required(),
});

module.exports = {
  createPostDto,
  updatePostDto,
  getPosttId,
};
