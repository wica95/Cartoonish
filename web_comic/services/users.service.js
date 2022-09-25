const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        isActive: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        mail: faker.commerce.productName(),
        pass: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      });
    }
  }

  //FAKER
  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {
        var users = this.users.slice(0, limit);
        if (users.length > 0) {
          resolve(users);
        } else {
          rejected('');
        }
      }, 5000);
  }

  findActiveUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activeUsers = this.users.filter((x) => x.isActive === true);
        resolve(activeUsers);
      }, 2000);
    });
  }

  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const user = this.users.find((item) => item.id === id);
    //NOT FOUND
    validateData(user, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
      user,
      CONFLICT,
      'CONFLICTO, el producto esta bloqueado.',
      (data) => data.isActive == false
    );
    return user;
  }
  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Producto no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentUser = this.users[index];
    this.users[index] = {
      ...currentUser,
      ...changes,
    };
    return this.users[index];
  }
  async updateComplete(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Producto no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentUser = this.users[index];
    this.users[index] = {
      id: currentUser.id,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Producto no encontrado');
    }
    this.users.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = UsersService;
