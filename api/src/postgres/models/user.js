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
        field: 'google_key',
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      calendarId: {
        field: 'calendar_id',
        type: DataTypes.STRING,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profileImg: {
        field: 'profile_img',
        type: DataTypes.STRING,
        allowNull: false,
      },
      timezone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lastLogin: {
        field: 'last_login',
        type: DataTypes.DATE,
      },
      zoomLink: {
        field: 'zoom_link',
        type: DataTypes.STRING,
      },
      student: {
        type: DataTypes.BOOLEAN,
      },
      refreshToken: {
        field: 'refresh_token',
        type: DataTypes.STRING,
      }
    },
    {
      freezeTableName: true,
      tableName: 'users',
      timestamps: false,
    }
  );
  return User;
};
