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
      users (id, name, email, profile_img, google_key, student, refresh_token, calendar_id)
    VALUES
      (200, 'Richard Nixon', 'dick@nixon.com', 'https://pbs.twimg.com/media/Dw68OOdX4AASnGK?format=jpg&name=small', 'crook', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'nuboudnqp0aubdc1fpn3dkg7i0@group.calendar.google.com'),
      (201, 'Abraham Lincoln', 'honestAbe@usa.gov', 'https://picsum.photos/200', 'emancipation', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'p1tapl9dul6c7rb0st0jbrou0g@group.calendar.google.com'),
      (202, 'Mahatma Gandhi', 'peace@independence.india.gov', 'https://picsum.photos/200', 'peace', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'e1jia1liuelgbqi61onpaes5k4@group.calendar.google.com'),
      (203, 'George Jones', 'example@example.com', 'https://picsum.photos/200', 'muzak', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'naqmeamb97kcjmts7gvkfso2m0@group.calendar.google.com'),
      (204, 'Anne Frank', 'anne.frank@the-attic.com', 'https://picsum.photos/200', 'hiding', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'h0466rfhdrrf90a6vq9dun3588@group.calendar.google.com'),
      (205, 'Genghis Khan', 'warlord@the-world.com', 'https://picsum.photos/200', 'ownTheWorld', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'gbbv5ruq075bhatg668m15o3jo@group.calendar.google.com'),
      (206, 'Kubla Khan', 'kubla.khan@xanadu.com', 'https://picsum.photos/200', 'statelyPleasureDome', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', '7qh4l9pbuvmdkrvdfhn4jl34qk@group.calendar.google.com'),
      (207, 'Lillian Murphy', 'lillian.murphy@example.com', 'https://randomuser.me/api/portraits/thumb/women/71.jpg', 'redmeercat187', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'i6j8g9p1vubnu7qua79qdn3oh0@group.calendar.google.com'),
      (208, 'Nathaniel Hall', 'nate.hall@exmaple.com', 'https://randomuser.me/api/portraits/thumb/men/98.jpg', 'blackswan827', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'td8bb36c9ivm8qoinns5rk2p4c@group.calendar.google.com'),
      (209, 'Anna Kelley', 'anna.kelley@example.com', 'https://randomuser.me/api/portraits/thumb/women/90.jpg', 'ticklishbear908', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'urrmq940ojiujtk37cs2uqtufo@group.calendar.google.com'),
      (210, 'Nickolai Hegge', 'nickolai.hegge@example.com', 'https://randomuser.me/api/portraits/thumb/men/51.jpg', 'goldencat992', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'ej1hs5cg4b1j5cil5jdee8jpn0@group.calendar.google.com'),
      (211, 'Gertrud Renaud', 'gertrud.renaud@example.com', 'https://randomuser.me/api/portraits/thumb/women/20.jpg', 'crazytiger323', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', '9ltdt22amigtcjpvl8ltl6m8bg@group.calendar.google.com'),
      (212, 'Irma Focke', 'irma.focke@example.com', 'https://randomuser.me/api/portraits/thumb/women/10.jpg', 'angrybird762', false, '1//0fVlt_uJ3zu6YCgYIARAAGA8SNwF-L9Irq9o6hlJsV9Yfxi7okLwzsKiEBYCq3ttm1NAR5nv0OlyxU_Rpd-gR593Gh6ojYpvkEOQ', 'tbtj2ge27s48bhk4tfpr65at04@group.calendar.google.com')
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
