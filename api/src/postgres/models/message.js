module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fromId: {
      field: 'from_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    toId: {
      field: 'to_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    opened: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  return Message;
};
