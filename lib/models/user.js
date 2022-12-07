const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    async comparePassword(password) {
      return await bcrypt.compare(password, this.passwordHash);
    }
    toJSON() {
      // hide protected fields
      const attributes = Object.assign({}, this.get());
      delete attributes['passwordHash'];
      return attributes;
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: 'Not a valid email',
          },
        },
        unique: {
          msg: 'Email already exists',
        },
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      passwordHash: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        set(password) {
          const passwordHash = bcrypt.hashSync(
            password,
            Number(process.env.SALT_ROUNDS)
          );
          this.setDataValue('passwordHash', passwordHash);
        },
      },
    },
    { sequelize, modelName: 'User' }
  );
  return User;
};
