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
      users (id, name, email, bio, profile_img, last_login, google_key, student)
    VALUES
      (1, 'Cody', 'chaines51@gmail.com', null, 'https://picsum.photos/200', Now(), 0, true),
      (2, 'Kate', 'kate@gmail.com', null, 'https://picsum.photos/200', Now(), 1, false),
      (3, 'Steve', 'steve@gmail.com', null, 'https://picsum.photos/200', Now(), 2, true)
  `);
};

exports.down = function (db) {
  return db.runSql(`
    DELETE FROM users 
    WHERE users.id IN (1,2,3)
  `);
};

exports._meta = {
  version: 1,
};
