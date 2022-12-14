const ListUserService = require('../services/ListUserService');

class ListUserController {

  async listUsers(req, res) {

    const result = await ListUserService.list();

    if (result.length == 0) {
      return res.status(404).json({
        status: "Nenhum usuário cadastrado no momento!"
      })
    }
    
    return res.status(200).json({
      result,      
    })

  }

}

module.exports = new ListUserController();
