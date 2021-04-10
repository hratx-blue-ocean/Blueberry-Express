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
      users (id, name, email, bio, profile_img, last_login, google_key, student, refresh_token, calendar_id)
    VALUES
      (1, 'Cody', 'chaines51@gmail.com', null, 'https://picsum.photos/200', Now(), 0, true, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', '4ce6gt44nbcr9h8j2o9rpng70k@group.calendar.google.com'),
      (2, 'Kate', 'kate@gmail.com', null, 'https://picsum.photos/200', Now(), 1, false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'tm5l0inf8o6gohi45mnkqouems@group.calendar.google.com'),
      (3, 'Steve', 'steve@gmail.com', null, 'https://picsum.photos/200', Now(), 2, true, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'fkt5pft2e0331tpta4am4lbi2k@group.calendar.google.com')
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
