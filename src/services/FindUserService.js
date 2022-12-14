const knex = require('../database/connection');


class FindUserService {

  async findByEmail(email) {
    try {
      const user = await knex.select("*").from("usuarios").where({ email: email });
      return user;
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async findById(id) {
    try {
      const result = await knex.select("*").from("usuarios").where({ id: id })
      return result;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new FindUserService();