const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string();
const isActive = Joi.boolean();
//const name = Joi.string().min(3).max(50);
//const mail = Joi.string().min(5).max(50);
//const pass = Joi.string().alphanum().min(4).max(50);
//const imagen = Joi.string();
const texto = Joi.string();

const createComentDto = Joi.object({
  isActive: isActive,
  texto: texto,
});

const updateComentDto = Joi.object({
  isActive: isActive,
  texto: texto,
});

const getcommentId =Joi.object({
id: id.required(),
})

module.exports = {
  createComentDto,
  updateComentDto,
  getcommentId,
};
