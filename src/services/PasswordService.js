const bcrypt = require('bcrypt');
const FindUserService = require('./FindUserService');

class passwordService {

  async comparePassword(email, password){
    try {
      const findUser = await FindUserService.findByEmail(email);      
      const passwordCompare = await bcrypt.compare(password, findUser[0].password);
      return passwordCompare;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new passwordService();