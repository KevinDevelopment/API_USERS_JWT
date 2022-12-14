const FindUserService = require('../services/FindUserService');
const passwordService = require('../services/PasswordService');
const authToken = require('../auth/authToken');

class LoginUserController {

  async login(req, res) {
    const { email, password } = req.body;

    const user = await FindUserService.findByEmail(email);

    if (user.length == 0) {
      return res.status(404).json({
        status: "Usuário não encontrado!"
      })
    }

    const result = await passwordService.comparePassword(email, password);

    if (!result) {
      return res.status(403).json({
        status: "Senha incorreta!"
      })
    }

    return res.status(200).json({
      email: user[0].email,
      id: user[0].id,
      token: authToken({ email: user.email, id: user.id })
    })
  }

}

module.exports = new LoginUserController();