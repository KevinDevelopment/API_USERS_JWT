const CreateUserService = require('../services/CreateUserService');
const FindUserService = require('../services/FindUserService');

class CreateUserController {

  async createUser(req, res) {
    const { id, email, password } = req.body;

    if (!id) {
      return res.status(406).json({
        status: "Dados inválidos!"
      })
    }

    if (!email) {
      return res.status(406).json({
        status: "Dados inválidos!"
      })
    }

    if (!password) {
      return res.status(406).json({
        status: "Dados inválidos!"
      })
    }

    const findUSer = await FindUserService.findByEmail(email);

    if (findUSer.length > 0) {
      return res.status(400).json({
        status: "usuário ja cadastrado"
      })
    }

    const findId = await FindUserService.findById(id);
    console.log(findId)

    if (findId.length > 0) {
      return res.status(400).json({
        status: "o ID não pode ser repetido!"
      })
    }

    await CreateUserService.create(id, email, password);

    return res.status(200).json({
      status: "Usuário cadastrado com sucesso!"
    })

  }

}

module.exports = new CreateUserController();