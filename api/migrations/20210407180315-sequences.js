'use strict';

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

exports.up = function (db) {
  return db.runSql(`
    ALTER SEQUENCE users_id_seq RESTART WITH 1000;
    ALTER SEQUENCE appointments_id_seq RESTART WITH 1000;
    ALTER SEQUENCE messages_id_seq RESTART WITH 1000;
    ALTER SEQUENCE languages_id_seq RESTART WITH 1000;
    ALTER SEQUENCE ratings_id_seq RESTART WITH 1000;
    ALTER SEQUENCE user_languages_id_seq RESTART WITH 1000;
  `);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
