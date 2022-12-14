const knex = require('../database/connection');


class DeleteUserService {

  async delete(id) {
    try {
      await knex.delete("*").from("usuarios").where({ id: id });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DeleteUserService();