const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
class PostService {
  constructor() {
    this.posts = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.posts.push({
        isActive: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        summary: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      });
    }
  }

  //FAKER
  async create(data) {
    const newPost = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.posts.push(newPost);
    return newPost;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {
        var posts = this.posts.slice(0, limit);
        if (posts.length > 0) {
          resolve(posts);
        } else {
          rejected('');
        }
      }, 5000);
  }

  findActivePost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activePost = this.posts.filter((x) => x.isActive === true);
        resolve(activePost);
      }, 2000);
    });
  }

  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const post = this.posts.find((item) => item.id === id);
    //NOT FOUND
    validateData(post, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
      post,
      CONFLICT,
      'CONFLICTO, la publicacion esta bloqueado.',
      (data) => data.isActive == false
    );
    return post;
  }
  async update(id, changes) {
    const index = this.posts.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Publicacion no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentPost = this.posts[index];
    this.posts[index] = {
      ...currentPost,
      ...changes,
    };
    return this.posts[index];
  }
  async updateComplete(id, changes) {
    const index = this.posts.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Publicacion no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentPost = this.posts[index];
    this.posts[index] = {
      id: currentPost.id,
      ...changes,
    };
    return this.posts[index];
  }

  async delete(id) {
    const index = this.posts.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Producto no encontrado');
    }
    this.posts.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = PostService;
