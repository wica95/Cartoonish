const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
class CommentService {
  constructor() {
    this.coment = [];
    this.generate();
  }

  generate() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.coment.push({
        isActive: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        coment: faker.commerce.productName(),

      });
    }
  }

  //FAKER
  async create(data) {
    const newComent = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.coment.push(newComent);
    return newComent;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {

        var coment = this.coment.slice(0, limit);
        if (coment.length > 0) {
          resolve(coment);
        } else {
          rejected('');
        }
      }, 5000);

  }

  findActiveComent() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activeComent = this.coment.filter((x) => x.isActive === true);
        resolve(activeComent);
      }, 2000);
    });
  }

  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const coments = this.coment.find((item) => item.id === id);
    //NOT FOUND
    validateData(coments, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
      coments,
      CONFLICT,
      'CONFLICTO, el comentario esta bloqueado.',
      (data) => data.isActive == false
    );
    return coments;
  }
  async update(id, changes) {
    const index = this.coment.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Comentario no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentComent = this.coment[index];
    this.coment[index] = {
      ...currentComent,
      ...changes,
    };
    return this.coment[index];
  }
  async updateComplete(id, changes) {
    const index = this.coment.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Comentario no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentComent = this.coment[index];
    this.coment[index] = {
      id: currentComent.id,
      ...changes,
    };
    return this.coment[index];
  }

  async delete(id) {
    const index = this.coment.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Comentario no encontrado');
    }
    this.coment.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = CommentService;
