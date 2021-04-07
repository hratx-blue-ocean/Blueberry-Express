const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
  // creating the cookie
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  // parsing the cookie

  done(null, user);

  // User.findById(id, function(err, user) {
  //   // do stuff in the db
  //   done(null, user);
  // });
});


passport.use(new GoogleStrategy({
  clientID: '72049321950-t0dcl714jtn83ste38331gk9mh7e9kja.apps.googleusercontent.com',
  clientSecret: 'nfhS-I1U0UuG_mFjlkuRXlYR',
  callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   //if the user doesn't exist, we will need to run an axios call to post a new calendar for that user
  //   axios
  //     .post(('https://www.googleapis.com/calendar/v3/calendars'), {
  //       summary: 'Blueberry Appointments'
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`
  //       }
  //     })
  //     .then((response) => {
  //       // grab the calendar id of the post request
  //       // and put it in the database
  //       console.log('response from calendarapi: ', response.data);
  //     });
  //   return done(err, user);
  // });
  console.log('big access token: ', accessToken);
  return done(null, profile);
}
));