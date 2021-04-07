module.exports = (sequelize, DataTypes) => {
  const UserLanguages = sequelize.define(
    'user_languages',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      languageId: {
        field: 'language_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: 'user_languages',
      timestamps: false,
    }
  );

  return UserLanguages;
};
