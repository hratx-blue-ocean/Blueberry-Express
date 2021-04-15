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
      user_languages (user_id, language_id)
    VALUES
      (100, 1),
      (100, 2),
      (100, 3),
      (100, 4),
      (100, 5),
      (100, 6),
      (100, 7),
      (100, 8),
      (101, 1),
      (101, 2),
      (101, 3),
      (101, 4),
      (101, 5),
      (101, 6),
      (101, 7),
      (101, 8),
      (102, 1),
      (102, 2),
      (102, 3),
      (102, 4),
      (102, 5),
      (102, 6),
      (102, 7),
      (102, 8),
      (103, 1),
      (103, 2),
      (103, 3),
      (103, 4),
      (103, 5),
      (103, 6),
      (103, 7),
      (103, 8),
      (104, 1),
      (104, 2),
      (104, 3),
      (104, 4),
      (104, 5),
      (104, 6),
      (104, 7),
      (104, 8),
      (105, 1),
      (105, 2),
      (105, 3),
      (105, 4),
      (105, 5),
      (105, 6),
      (105, 7),
      (105, 8),
      (106, 1),
      (106, 2),
      (106, 3),
      (106, 4),
      (106, 5),
      (106, 6),
      (106, 7),
      (106, 8)
  `);
};

exports.down = function (db) {
  return db.runSql(`
    DELETE FROM user_languages
    WHERE user_id IN (100,101,102,103,104,105,106)
  `);
};

exports._meta = {
  version: 1,
};
