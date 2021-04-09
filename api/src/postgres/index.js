const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

const db = {};
const basename = path.basename(__dirname);
const env = process.env.NODE_ENV;
console.log(process.env.POSTGRES_DATABASE);
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
    // const model = sequelize.import(path.join(__dirname, './models', file));
    const model = require(path.join(__dirname, './models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Define relationships here
db.message.belongsTo(db.user, { as: 'from', foreignKey: 'from_id' });
db.user.hasMany(db.message, { as: 'sentMessages', foreignKey: 'from_id' });
db.message.belongsTo(db.user, { as: 'to', foreignKey: 'to_id' });
db.user.hasMany(db.message, { as: 'incomingMessages', foreignKey: 'to_id' });
db.rating.belongsTo(db.user, { foreignKey: 'teacher_id' });
db.rating.belongsTo(db.user, { foreignKey: 'student_id' });
db.appointment.belongsTo(db.user, { as: 'from', foreignKey: 'from_id' });
db.user.hasMany(db.appointment, { as: 'sentAppointments', foreignKey: 'from_id' });
db.appointment.belongsTo(db.user, { as: 'to', foreignKey: 'to_id' });
db.user.hasMany(db.appointment, { as: 'incomingAppointments', foreignKey: 'to_id' });
db.rating.belongsTo(db.appointment, { foreignKey: 'appointment_id' });
db.language.belongsToMany(db.user, { through: db.user_languages });
db.user.belongsToMany(db.language, { through: db.user_languages });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
