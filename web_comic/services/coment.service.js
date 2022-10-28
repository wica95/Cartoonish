const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
class CommentService {
  constructor() {
    this.coments = [];
    this.generate();
  }

  generate() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.coments.push({
        isActive: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        texto: faker.commerce.productName(),

      });
    }
  }

  //FAKER
  async create(data) {
    const newComent = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.coments.push(newComent);
    return newComent;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {

        var coments = this.coments.slice(0, limit);
        if (coments.length > 0) {
          resolve(coments);
        } else {
          rejected('');
        }
      }, 5000);

  }

  findActiveComents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activeComents = this.coments.filter((x) => x.isActive === true);
        resolve(activeComents);
      }, 2000);
    });
  }

  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const coment = this.coments.find((item) => item.id === id);
    //NOT FOUND
    validateData(coment, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
      coment,
      CONFLICT,
      'CONFLICTO, el comentario esta bloqueado.',
      (data) => data.isActive == false
    );
    return coment;
  }
  async update(id, changes) {
    const index = this.coments.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Comentario no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentComent = this.coments[index];
    this.coments[index] = {
      ...currentComent,
      ...changes,
    };
    return this.coments[index];
  }
  async updateComplete(id, changes) {
    const index = this.coments.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Comentario no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentComent = this.coments[index];
    this.coments[index] = {
      id: currentComent.id,
      ...changes,
    };
    return this.coments[index];
  }

  async delete(id) {
    const index = this.coments.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Comentario no encontrado');
    }
    this.coments.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = CommentService;
