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
      clientID: '72049321950-t0dcl714jtn83ste38331gk9mh7e9kja.apps.googleusercontent.com',
      clientSecret: 'nfhS-I1U0UuG_mFjlkuRXlYR',
      callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, done) {



      db.user.findOrCreate({
        where: {
          googleKey: profile.id,
        },
        defaults: {
          name: profile.displayName,
          email: profile.emails[0].value,
          profileImg: profile.photos[0].value,
        }
      })
        .then((user) => {
          if (!user[0].calendarId) {
            console.log('making calendar for: ', user[0]);
            let calendar = Calendar.createCalendar(accessToken, refreshToken);
            Promise.resolve(calendar)
              .then((calendarObject) => {
                user[0].calendarId = calendarObject.response.id;
                return user[0].save();
              });
          }
        })
        .then(()=> {
          const token = jwt.sign({ accessToken, refreshToken, googleKey: profile.id }, process.env.JWT_SECRET);
          return done(null, token);
        });



    }
  )
);
