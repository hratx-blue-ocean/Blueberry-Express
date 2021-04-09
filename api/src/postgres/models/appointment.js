module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    'appointment',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      fromEventId: {
        field: 'from_event_id',
        type: DataTypes.STRING,
        allowNull: false,
      },
      toEventId: {
        field: 'to_event_id',
        type: DataTypes.STRING,
        allowNull: false,
      },
      approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      pending: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
      tableName: 'appointments',
      timestamps: false,
    }
  );

  return Appointment;
};
