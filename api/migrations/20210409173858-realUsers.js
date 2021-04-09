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
      users (id, name, email, bio, profile_img, last_login, google_key)
    VALUES
      (100, 'Kate D', 'katespb98@gmail.com', null, 'https://picsum.photos/200', Now(), '116841410873596401606'),
      (101, 'Cody Haines', 'chaines51@gmail.com', null, 'https://picsum.photos/200', Now(), '107337282055510190530'),
      (102, 'Steve Gackstetter', 'steve@gmail.com', null, 'https://picsum.photos/200', Now(), '112976176769064392278'),
      (103, 'Brandon Harden', 'brandon@gmail.com', null, 'https://picsum.photos/200', Now(), '107927557891646564494'),
      (104, 'Tahsin Ahmed', 'tahsin@gmail.com', null, 'https://picsum.photos/200', Now(), '110707954968255705313'),
      (105, 'Zachary Thomas', 'zach.thomas2401@gmail.com', null, 'https://picsum.photos/200', Now(), '100544898424455990533'),
      (106, 'Matt Collins', 'matt.collins087@gmail.com', null, 'https://picsum.photos/200', Now(), '106363569953634742020')
  `);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
