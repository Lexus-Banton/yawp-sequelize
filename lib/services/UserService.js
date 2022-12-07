const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

module.exports = class UserService {
  static async signIn({ email, password = '' }) {
    try {
      const user = await db.User.findOne({ where: { email } });

      if (!user) throw new Error('Invalid email');
      // use built in compareSync method
      if (!bcrypt.compareSync(password, user.passwordHash))
        throw new Error('Invalid password');

      // creates our JWT using built in function
      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: '1 day',
      });

      return token;
    } catch (error) {
      error.status = 401;
      throw error;
    }
  }
};
