const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./postgres');
const jwt = require('jsonwebtoken');
const Calendar = require('./controller');

passport.serializeUser(function (user, done) {
  // creating the cookie
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  // parsing the cookie

  done(null, user);

  // User.findById(id, function(err, user) {
  //   // do stuff in the db
  //   done(null, user);
  // });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      db.user
        .findOrCreate({
          where: {
            googleKey: profile.id,
          },
          defaults: {
            name: profile.displayName,
            email: profile.emails[0].value,
            profileImg: profile.photos[0].value,
            refreshToken: refreshToken,
          },
        })
        .then(async (user) => {
          if (!user[0].calendarId) {
            user[0].calendarId = await Calendar.findOrCreateCalendar(accessToken);
          }
          if (!user[0].refreshToken) {
            user[0].refreshToken = refreshToken;
          }
          return user[0].save();
        })
        .then((user) => {
          const token = jwt.sign({ id: user.id, googleKey: profile.id }, process.env.JWT_SECRET);
          return done(null, token);
        })
        .catch((e) => {
          return done(e);
        });
    }
  )
);
