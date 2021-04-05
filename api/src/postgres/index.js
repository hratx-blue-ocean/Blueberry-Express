const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

const db = {};
const basename = path.basename(__dirname);
const env = process.env.NODE_ENV;

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    dialect: 'postgres',
  }
);
console.log(`Sequelize connected to postgres@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT || 5432}`);

fs.readdirSync(path.join(__dirname, './models'))
  .filter((file) => file.indexOf('.' !== 0 && file !== basename && file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, './models', file));
    db[model.name] = model;
  });

// Define relationships here

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
