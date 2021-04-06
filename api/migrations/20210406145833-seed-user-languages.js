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
    user_languages (id,user_id, language_id)
  VALUES
    (1,1,2),
    (2,1,4),
    (3,2,1),
    (4,2,3),
    (5,3,4),
    (6,3,5),
    (7,3,6)`);
};

exports.down = function (db) {
  return db.runSql(`
    DELETE FROM user_languages
    WHERE id IN (1,2,3,4,5,6,7)
  `);
};

exports._meta = {
  version: 1,
};
