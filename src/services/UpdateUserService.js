const knex = require('../database/connection');

class UpdateUserService {

  async update(id, email) {
    try {
      await knex.update({ email }).from("usuarios").where({ id: id })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UpdateUserService();