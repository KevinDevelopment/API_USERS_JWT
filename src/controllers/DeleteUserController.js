const DeleteUserService = require('../services/DeleteUserService');
const FindUserService = require('../services/FindUserService');

class DeleteUserController {

  async remove(req, res) {
    const { id } = req.params;

    const result = await FindUserService.findById(id);

    if (result.length == 0) {
      return res.status(406).json({
        status: "O id informado não existe no banco de dados!"
      })
    }

    await DeleteUserService.delete(id);

    return res.status(200).json({
      status: "Deletado com sucesso!"
    })
  }

}

module.exports = new DeleteUserController();