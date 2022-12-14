const knex = require('../database/connection');

class ListUserService {

  async list() {
    try {
      const Users = knex.select(["id", "email"]).from("usuarios");
      return Users;
    } catch (erro) {
      console.log(erro)
    }
  }
}

module.exports = new ListUserService();