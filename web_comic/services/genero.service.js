const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
class GeneroService {
  constructor() {
    this.generos = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.generos.push({
        isActive: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        nameG: faker.commerce.productName(),
      });
    }
  }

  //FAKER
  async create(data) {
    const newGenero = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.generos.push(newGenero);
    return newGenero;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        var generos = this.generos.slice(0, limit);
        if (generos.length > 0) {
          resolve(generos);
        } else {
          rejected('');
        }
      }, 5000);
    });
  }

  findActiveGeneros() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activeGeneros = this.generos.filter((x) => x.isActive === true);
        resolve(activeGeneros);
      }, 2000);
    });
  }

  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const genero = this.generos.find((item) => item.id === id);
    //NOT FOUND
    validateData(genero, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
      genero,
      CONFLICT,
      'CONFLICTO, el genero esta bloqueado.',
      (data) => data.isActive == false
    );
    return genero;
  }
  async update(id, changes) {
    const index = this.generos.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('genero no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentGenero = this.generos[index];
    this.generos[index] = {
      ...currentGenero,
      ...changes,
    };
    return this.generos[index];
  }
  async updateComplete(id, changes) {
    const index = this.generos.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Genero no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentGenero = this.generos[index];
    this.generos[index] = {
      id: currentGenero.id,
      ...changes,
    };
    return this.generos[index];
  }

  async delete(id) {
    const index = this.generos.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Genero no encontrado');
    }
    this.generos.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = GeneroService;
