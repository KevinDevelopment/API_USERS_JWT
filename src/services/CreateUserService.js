const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class CreateUserService {

  async create(id,email, password) {
    try {
      const hashed = await bcrypt.hash(password, 10);
      await knex.insert({ id, email, password: hashed }).table("usuarios");
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = new CreateUserService();