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
      scheduledFor: {
        field: 'scheduled_for',
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      googleCalendarId: {
        field: 'google_calendar_id',
        type: DataTypes.INTEGER,
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
