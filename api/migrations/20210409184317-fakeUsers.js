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
  return db
    .runSql(
      `
    INSERT INTO
      users (id, name, email, profile_img, google_key, student)
    VALUES
      (200, 'Richard Nixon', 'dick@nixon.com', 'https://pbs.twimg.com/media/Dw68OOdX4AASnGK?format=jpg&name=small', 'crook', false),
      (201, 'Abraham Lincoln', 'honestAbe@usa.gov', 'https://picsum.photos/200', 'emancipation', false),
      (202, 'Mahatma Gandhi', 'peace@independence.india.gov', 'https://picsum.photos/200', 'peace', false),
      (203, 'George Jones', 'example@example.com', 'https://picsum.photos/200', 'muzak', false),
      (204, 'Anne Frank', 'anne.frank@the-attic.com', 'https://picsum.photos/200', 'hiding', false),
      (205, 'Genghis Khan', 'warlord@the-world.com', 'https://picsum.photos/200', 'ownTheWorld', false),
      (206, 'Kubla Khan', 'kubla.khan@xanadu.com', 'https://picsum.photos/200', 'statelyPleasureDome', false),
      (207, 'Lillian Murphy', 'lillian.murphy@example.com', 'https://randomuser.me/api/portraits/thumb/women/71.jpg', 'redmeercat187', false),
      (208, 'Nathaniel Hall', 'nate.hall@exmaple.com', 'https://randomuser.me/api/portraits/thumb/men/98.jpg', 'blackswan827', false),
      (209, 'Anna Kelley', 'anna.kelley@example.com', 'https://randomuser.me/api/portraits/thumb/women/90.jpg', 'ticklishbear908', false),
      (210, 'Nickolai Hegge', 'nickolai.hegge@example.com', 'https://randomuser.me/api/portraits/thumb/men/51.jpg', 'goldencat992', false),
      (211, 'Gertrud Renaud', 'gertrud.renaud@example.com', 'https://randomuser.me/api/portraits/thumb/women/20.jpg', 'crazytiger323', false),
      (212, 'Irma Focke', 'irma.focke@example.com', 'https://randomuser.me/api/portraits/thumb/women/10.jpg', 'angrybird762', false)
  `
    )
    .then(() => {
      return db.runSql(`
    INSERT INTO
      user_languages (user_id, language_id)
    VALUES
      (200, 1),
      (201, 2),
      (202, 3),
      (203, 4),
      (204, 5),
      (205, 6),
      (206, 6),
      (207, 5),
      (208, 4),
      (209, 3),
      (210, 2),
      (211, 1),
      (212, 1)
      `);
    });
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
