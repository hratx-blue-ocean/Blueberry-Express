module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      googleKey: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timezone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lastLogin: {
        type: DataTypes.DATE,
      },
      zoomLink: {
        type: DataTypes.STRING,
      },
      student: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      tableName: 'users',
    }
  );
  return User;
};
