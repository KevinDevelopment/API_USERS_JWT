const UpdateUserService = require('../services/UpdateUserService');
const FindUserService = require('../services/FindUserService');

class UpdateUserController {

  async updateUser(req, res) {
    const { id } = req.params;
    const { email } = req.body;

    const result = await FindUserService.findById(id);

    if (result.length == 0) {
      return res.status(406).json({
        status: "O ID informado não existe no banco de dados!"
      })
    }

    if (!email) {
      return res.status(406).json({
        status: "O email não foi informado!"
      })
    }

    await UpdateUserService.update(id, email);
    return res.status(200).json({
      status: "Usuário atualizado com sucesso!"
    })
  }
}

module.exports = new UpdateUserController();