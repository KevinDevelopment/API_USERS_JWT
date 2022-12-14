const jwt = require('jsonwebtoken');

module.exports = (email, id) => {  
  const token = jwt.sign({ email, id }, process.env.JWT_SECRET_KEY, {expiresIn: "7d"});
  return token;
}