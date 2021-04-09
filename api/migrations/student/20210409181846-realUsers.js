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
    UPDATE users
    SET student = true
    WHERE id IN (100,101,102,103,104,105,106)
  `);
};

exports.down = function (db) {
  return db.runSql(`
    UPDATE users
    SET student = null
    WHERE id IN (100,101,102,103,104,105,106)
  `);
};

exports._meta = {
  version: 1,
};
