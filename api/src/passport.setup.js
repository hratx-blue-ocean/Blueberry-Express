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
  // use the profile info, mainly the id, to check if the user is registered in our db
  // if user doesn't exist, create them in the database using a combination of the info from
  // their profile object sent by google and info that they enter in the sign up process
  // if they do exist, redirect them to their profile page.
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   return done(err, user);
  // });
  console.dir(profile);
  return done(null, profile);
}
));