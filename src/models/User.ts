const { S, DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

interface user {
  name: string;
  lastname: string;
  email: string;
  password: string;
  salt: string;
  hashedPassword: Function;
}

class User extends Model {
  hashedPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password: string) {
    return this.hashedPassword(password, this.salt).then(
      (newHash: string) => newHash === this.password
    );
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate((user: user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;

  return user.hashedPassword(user.password, user.salt).then((hash: string) => {
    user.password = hash;
  });
});

export default User;
