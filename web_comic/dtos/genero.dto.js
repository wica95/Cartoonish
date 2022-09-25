const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id =        Joi.string();
const isActive =  Joi.boolean();
const nameG =     Joi.string().min(3).max(50);


const createGeneroDto = Joi.object({
  isActive: isActive,
  nameG: nameG,
});

const updateGeneroDto = Joi.object({
  isActive: isActive,
  nameG: nameG,
});

const getGeneroId =Joi.object({
id: id.required(),
})

module.exports = {
  createGeneroDto,
  updateGeneroDto,
  getGeneroId,
};
