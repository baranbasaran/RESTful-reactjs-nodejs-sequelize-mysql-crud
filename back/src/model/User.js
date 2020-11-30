const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports.sequelize = sequelize;

module.exports.User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
  },
  mail: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  birthDate: {
    type: Sequelize.DATEONLY(),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
});
