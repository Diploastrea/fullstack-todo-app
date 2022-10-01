/* eslint-disable import/no-dynamic-require */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable global-require */

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { config } = require('../../config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
console.log(env);
console.log(config);
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize('todo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    timezone: '+02:00',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
