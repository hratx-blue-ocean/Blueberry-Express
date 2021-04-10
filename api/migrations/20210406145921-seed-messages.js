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
      messages (id, from_id, to_id, body, subject)
    VALUES
      (1, 1, 2, 'Hey steve! Just checking in', 'Checking in'),
      (2, 2, 3, 'Hi Steve! My name is Kate', 'Hi!'),
      (3, 3, 2, 'Hi Kate!', null)
  `);
};

exports.down = function (db) {
  return db.runSql(`
    DELETE FROM messages
    WHERE id IN (1,2,3)  
  `);
};

exports._meta = {
  version: 1,
};
