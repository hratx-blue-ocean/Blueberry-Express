var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = (db) => {
  return db
    .createTable('users', {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true },
      email: { type: 'string', notNull: true },
      bio: { type: 'text' },
      profile_img: { type: 'string' },
      timezone: { type: 'int', notNull: true, defaultValue: 0 },
      last_login: { type: 'date', notNull: true, defaultValue: new String('Now()') },
      google_key: { type: 'string', notNull: true },
      student: { type: 'boolean', notNull: true },
    })
    .then(() => {
      return db.createTable('appointments', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        from_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'user_appt_from',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              from_id: 'id',
            },
          },
        },
        to_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'user_appt_to',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              to_id: 'id',
            },
          },
        },
        scheduled_for: {
          type: 'date',
          notNull: true,
        },
        created_at: {
          type: 'date',
          notNull: true,
          defaultValue: new String('Now()'),
        },
        google_calendar_id: {
          type: 'int',
          notNull: true,
        },
        approved: { type: 'boolean', notNull: true, defaultValue: false },
        pending: { type: 'boolean', notNull: true, defaultValue: true },
      });
    })
    .then(() => {
      return db.createTable('messages', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        from_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'user_message_from',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              from_id: 'id',
            },
          },
        },
        to_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'user_message_to',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              to_id: 'id',
            },
          },
        },
        body: {
          type: 'text',
          notNull: true,
        },
        subject: {
          type: 'string',
        },
        opened: {
          type: 'boolean',
          notNull: true,
          defaultValue: false,
        },
        created_at: {
          type: 'date',
          notNull: true,
          defaultValue: new String('Now()'),
        },
      });
    })
    .then(() => {
      return db.createTable('languages', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        name: { type: 'string', notNull: true },
      });
    })
    .then(() => {
      return db.createTable('ratings', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        teacher_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'teacher_rating',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              teacher_id: 'id',
            },
          },
        },
        student_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'student_rating',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              student_id: 'id',
            },
          },
          rating: { type: 'int', notNull: true, defaultValue: 0 },
          body: { type: 'text', notNull: false },
          appointment_id: {
            type: 'int',
            notNull: true,
            foreignKey: {
              name: 'appt_rating',
              table: 'appointments',
              rules: {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
              },
              mapping: {
                appointment_id: 'id',
              },
            },
          },
          created_at: {
            type: 'date',
            notNull: true,
            defaultValue: new String('Now()'),
          },
        },
      });
    })
    .then(() => {
      return db.createTable('user_languages', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        user_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'user_lang',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              user_id: 'id',
            },
          },
        },
        language_id: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'lang_user',
            table: 'languages',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            mapping: {
              language_id: 'id',
            },
          },
        },
      });
    });
};

exports.down = function (db) {
  return db
    .dropTable('messages')
    .then(() => db.dropTable('appointments'))
    .then(() => db.dropTable('user_languages'))
    .then(() => db.dropTable('languages'))
    .then(() => db.dropTable('ratings'))
    .then(() => db.dropTable('users'));
};

exports._meta = {
  version: 1,
};
