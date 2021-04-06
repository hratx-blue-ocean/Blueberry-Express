module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('rating', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacherId: {
      field: 'teacher_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      field: 'student_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    comment: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    appointmentId: {
      field: 'appointment_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  return Rating;
};
