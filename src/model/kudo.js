/* Imports */
const Sequelize = require("sequelize");
const sequelize = require('../database/database');

/* Definindo o model kudo */
const kudo = sequelize.define('Kudo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
      sender: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
          len: [2, 40]
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
      icon: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      }
});

module.exports = kudo;