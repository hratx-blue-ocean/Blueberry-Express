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
    INSERT INTO
      languages (id, name)
    VALUES
      (1, 'English'),
      (2, 'Spanish'),
      (3, 'Japanese'),
      (4, 'Russian'),
      (5, 'French'),
      (6, 'Mandarin')
  `);
};

exports.down = function (db) {
  return db.runSql(`
    DELETE FROM languages
    WHERE languages.id IN (1,2,3,4,5,6)
  `);
};

exports._meta = {
  version: 1,
};
