module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define(
    'language',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: 'languages',
      timestamps: false,
    }
  );
  return Language;
};
